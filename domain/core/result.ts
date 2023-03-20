export interface Possibility<IssueType, ValueType> {
    update: <NewValueType>(updateValue: (value: ValueType) => NewValueType) => Possibility<IssueType, NewValueType>
    transform: <NewValueType>(updateValue: (value: ValueType) => Possibility<IssueType, NewValueType>) => Possibility<IssueType, NewValueType>
    onValue: (handler: (value: ValueType) => void) => Possibility<IssueType, ValueType>;
    onIssue: (handler: (issue: IssueType) => void) => Possibility<IssueType, ValueType>;
}

export class Value<IssueType, ValueType> implements Possibility<IssueType, ValueType> {
    public constructor(private readonly value: ValueType) {}

    public update<NewValueType>(updateValue: (value: ValueType) => NewValueType): Possibility<IssueType, NewValueType> {
        return new Value(updateValue(this.value));
    }

    public transform<NewValueType>(updateValue: (value: ValueType) => Possibility<IssueType, NewValueType>): Possibility<IssueType, NewValueType> {
        return updateValue(this.value);
    }

    public onValue(handler: (value: ValueType) => void): Possibility<IssueType, ValueType> {
        handler(this.value);
        return this;
    }

    public onIssue(handler: (issue: IssueType) => void): Possibility<IssueType, ValueType> {
        return this;
    }
}

export class Issue<IssueType, ValueType> implements Possibility<IssueType, ValueType> {
    public constructor(private readonly issue: IssueType) {}

    public update<NewValueType>(updateValue: (value: ValueType) => NewValueType): Possibility<IssueType, NewValueType> {
        return new Issue(this.issue);
    }

    public transform<NewValueType>(updateValue: (value: ValueType) => Possibility<IssueType, NewValueType>): Possibility<IssueType, NewValueType> {
        return new Issue(this.issue);
    }

    public onValue(handler: (value: ValueType) => void): Possibility<IssueType, ValueType> {
        return this;
    }

    public onIssue(handler: (issue: IssueType) => void): Possibility<IssueType, ValueType> {
        handler(this.issue);
        return this;
    }
}