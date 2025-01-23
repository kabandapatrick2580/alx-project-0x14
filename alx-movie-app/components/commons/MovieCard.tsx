const movieCard: React.FC = () => {
    return (
        <div className="movie-card">
            <div className="movie-card__image"></div>
            <div className="movie-card__info">
                <h2 className="movie-card__title">Movie Title</h2>
                <p className="movie-card__description">Movie Description</p>
            </div>
        </div>
    );
}
export default movieCard;