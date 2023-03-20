export interface Possibility<IssueType, ValueType> {
    map: <NewValueType>(updateValue: (value: ValueType) => NewValueType) => Possibility<IssueType, NewValueType>
    andThen: <NewValueType>(updateValue: (value: ValueType) => Possibility<IssueType, NewValueType>) => Possibility<IssueType, NewValueType>
    withDefault: (fallbackValue: ValueType) => ValueType
    withError: () => IssueType | null
}

export class Value<IssueType, ValueType> implements Possibility<IssueType, ValueType> {
    public constructor(private readonly value: ValueType) {}

    public withDefault(fallbackValue: ValueType): ValueType {
        return this.value;
    }

    public withError(): IssueType | null {
        return null;
    }

    public map<NewValueType>(updateValue: (value: ValueType) => NewValueType): Possibility<IssueType, NewValueType> {
        return new Value(updateValue(this.value));
    }

    public andThen<NewValueType>(updateValue: (value: ValueType) => Possibility<IssueType, NewValueType>): Possibility<IssueType, NewValueType> {
        return updateValue(this.value);
    }
}

export class Issue<IssueType, ValueType> implements Possibility<IssueType, ValueType> {
    public constructor(private readonly issue: IssueType) {}

    public withDefault(fallbackValue: ValueType): ValueType {
        return fallbackValue;
    }

    public withError(): IssueType | null {
        return this.issue;
    }

    public map<NewValueType>(updateValue: (value: ValueType) => NewValueType): Possibility<IssueType, NewValueType> {
        return new Issue(this.issue);
    }

    public andThen<NewValueType>(updateValue: (value: ValueType) => Possibility<IssueType, NewValueType>): Possibility<IssueType, NewValueType> {
        return new Issue(this.issue);
    }
}