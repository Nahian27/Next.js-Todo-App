function Loading() {
    return (<><div className='p-5 position-absolute top-50 start-50 translate-middle'>
        <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="visually-hidden">Loading...</span>
        </div></div>
    </>);
}

export default Loading;