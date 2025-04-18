import { sveltekit } from '@sveltejs/kit/vite';
import inject from '@rollup/plugin-inject';
import { defineConfig, loadEnv } from 'vite';
import { join } from 'path';
import { readFileSync } from 'fs';
import type { UserConfig } from 'vite';

// npm run dev = local
// npm run build = local
// dfx deploy = local
// dfx deploy --network ic = ic
// dfx deploy --playground
let network = process.env.DFX_NETWORK;
if (network === undefined) {
	network = 'local';
}

const host = network === 'local' ? 'http://localhost:4943' : 'https://ic0.app';

const readCanisterIds = ({ prefix }: { prefix?: string }): Record<string, string> => {
	let canisterIdsJsonFile: string;
	if (network === 'ic') {
		canisterIdsJsonFile = join(process.cwd(), 'canister_ids.json');
	} else if (network === 'playground') {
		canisterIdsJsonFile = join(process.cwd(), '.dfx', 'playground', 'canister_ids.json');
	} else {
		canisterIdsJsonFile = join(process.cwd(), '.dfx', 'local', 'canister_ids.json');
	}

	try {
		type Details = {
			ic?: string;
			local?: string;
			playground?: string;
		};

		const config: Record<string, Details> = JSON.parse(readFileSync(canisterIdsJsonFile, 'utf-8'));

		return Object.entries(config).reduce((acc, current: [string, Details]) => {
			const [canisterName, canisterDetails] = current;
			const erg = {
				...acc,
				[`${prefix ?? ''}${canisterName.toUpperCase()}_CANISTER_ID`]:
					canisterDetails[network as keyof Details]
			};

			return erg;
		}, {});
	} catch (e) {
		throw Error(`Could not get canister ID from ${canisterIdsJsonFile}: ${e}`);
	}
};

const config: UserConfig = {
	plugins: [sveltekit()],
	build: {
		target: 'es2020',
		rollupOptions: {
			// Polyfill Buffer for production build
			plugins: [
				inject({
					modules: { Buffer: ['buffer', 'Buffer'] }
				})
			]
		}
	},
	optimizeDeps: {
		esbuildOptions: {
			// Node.js global to browser globalThis
			define: {
				global: 'globalThis'
			}
		}
	}
};

export default defineConfig(({ mode }: UserConfig): UserConfig => {
	// Expand environment - .env files - with canister IDs
	process.env = {
		...process.env,
		...loadEnv(mode ?? 'development', process.cwd()),
		...readCanisterIds({ prefix: 'VITE_' }),
		VITE_DFX_NETWORK: network,
		VITE_HOST: host
	};

	return {
		...config,
		plugins: [sveltekit()],
		// Backwards compatibility for auto generated types of dfx that are meant for webpack and process.env
		define: {
			'process.env': {
				...readCanisterIds({}),
				DFX_NETWORK: network
			}
		}
	};
});
