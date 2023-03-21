export interface RowInterface {
    children: any;
}

export const Row = ({ children }: RowInterface) => {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            {children}
        </div >
    );
}