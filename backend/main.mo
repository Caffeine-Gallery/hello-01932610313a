import Text "mo:base/Text";

import Debug "mo:base/Debug";

actor {
  public query func greet() : async Text {
    Debug.print("Greeting requested");
    "Hello world blabla"
  };
}
