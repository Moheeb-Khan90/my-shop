import './Loading.css'

const Loading = () => {
    return (
        <>
            <div id="loading" class="d-flex justify-content-center align-items-center my-3">
                <div className="spinner-border text-success my-2 " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Loading