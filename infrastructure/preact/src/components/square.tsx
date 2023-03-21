export interface SquareInterface {
    children: any;
    onSquareClicked: () => void;
}

export const Square = ({ children, onSquareClicked }: SquareInterface) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid black", height: "50px", width: "50px", cursor: "pointer" }} onClick={onSquareClicked}>
            {children}
        </div>
    );
}