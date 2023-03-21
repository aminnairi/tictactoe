export enum SeverityEnumeration {
    Success = "SUCCESS",
    Error = "ERROR"
}

export interface NotificationInterface {
    severity: SeverityEnumeration,
    error: string | null
}

export const severityToBackgroundColor = (severity: SeverityEnumeration): string => {
    switch (severity) {
        case SeverityEnumeration.Error:
            return "rgba(255, 0, 0, 0.25)";

        default:
            return "rgba(0, 255, 0, 0.5)";
    }
};

export const severityToColor = (severity: SeverityEnumeration): string => {
    switch (severity) {
        case SeverityEnumeration.Error:
            return "red";

        default:
            return "green";
    }
};

export const severityToStyles = (severity: SeverityEnumeration) => {
    return {
        backgroundColor: severityToBackgroundColor(severity),
        color: severityToColor(severity)
    };
}

export const Notification = ({ severity, error }: NotificationInterface) => {
    const styles = {
        ...severityToStyles(severity),
        padding: "10px",
        fontFamily: "sans-serif",
        margin: "10px 0"
    }

    if (error) {
        return (
            <div style={styles}>
                {error}
            </div>
        )
    }

    return null;
}