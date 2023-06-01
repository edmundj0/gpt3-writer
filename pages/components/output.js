

export default function Output ({apiOutput}) {
    return (
        <>
        {apiOutput && (
            <div className="output">
                <div className="output-header-container">
                    <div className="output-header">
                        <h3>Output</h3>
                    </div>
                    <div className="output-content">
                        <p>{apiOutput}</p>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}
