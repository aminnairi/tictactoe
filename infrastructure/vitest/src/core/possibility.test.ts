import { Possibility, Value, Issue } from "@application/domain/core/possibility";
import { it, expect } from "vitest";

it("should return the value", () => {
    new Value(123).onValue(value => {
        expect(value).toEqual(123);
    });
});

it("should return the error", () => {
    new Issue("error").onIssue(issue => {
        expect(issue).toEqual("error");
    });
});

it("should return the updated value", () => {
    new Value(123).update(value => value * 2).onValue(value => {
        expect(value).toEqual(246);
    });
});

it("should return the transformed value", () => {
    new Value(123).transform(value => new Value(value * 2)).onValue(value => {
        expect(value).toEqual(246);
    });
});

it("should return the value unwrapped", () => {
    expect(new Value(123).withDefault(0)).toEqual(123);
});

it("should return the error unwrapped", () => {
    expect(new Issue("error").withError()).toEqual("error");
});