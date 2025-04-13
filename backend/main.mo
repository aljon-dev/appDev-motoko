import Nat "mo:base/Nat";
import Debug "mo:base/Debug";

actor {
  public query func sayHelloTo(name : Text) : async Text {
    return "Hello " # name # " 👋 ";
  };

  // Stable variable to persist visit count across upgrades
  stable var visitCount: Nat = 0;

  // Increment the visit count and return the new value
  public func recordVisit() : async Nat {
    visitCount += 1;
    return visitCount;
  };

  // Return the current visit count
  public query func getVisitCount() : async Nat {
    return visitCount;
  };

  // Returns the visit count as a string and prints a debug message
  public query func totalNum() : async Text {
    let message = Nat.toText(visitCount);
    Debug.print("Greet called. Message: " # message);
    return message;
  };
};
