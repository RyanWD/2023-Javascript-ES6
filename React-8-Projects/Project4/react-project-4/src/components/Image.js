
export default function Image({memeUrl, alt}) {
    return (
        <div className="image--container">
           <img src={memeUrl} alt={alt} />
        </div>
    )
}