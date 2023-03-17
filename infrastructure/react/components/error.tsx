export interface ErrorPropsInterface {
  error: Error | null
}

export const Error = ({ error }: ErrorPropsInterface) => {
  if (error) {
    return (
      <div style={{ backgroundColor: "rgba(255, 0, 0, 0.3)", color: "red", padding: "10px" }}>
        {error.message}
      </div>
    );
  } 

  return null;
};
