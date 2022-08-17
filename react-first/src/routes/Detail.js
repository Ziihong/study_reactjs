import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail() {
    // useParams() 함수를 사용하여 react Router의 변수 값 전달 받음
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState("");

    const getDetail = async () =>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetail(json);
        setLoading(false);
        console.log(json);
    }

    useEffect( () => {
        getDetail();
    }, [id]);

    return (
        <div>
            {loading ?
                <h1>Loading . . . </h1>
                :
                (
                    <div>
                        <img src={detail.data.movie.large_cover_image} alt={detail.data.movie.title}/>
                        <h2>{detail.data.movie.title} ({detail.data.movie.year})</h2>
                        <p>⭐️ Rating: {detail.data.movie.rating}</p>
                        <p>⏱ Runtime: {detail.data.movie.runtime} minutes</p>
                        <p>🔎 Genres:
                            <ul>
                                {detail.data.movie.genres.map((g) => <li key={g}>{g}</li>)}
                            </ul>
                        </p>
                        <p>📜 Summary: <br/>{detail.data.movie.description_full}</p>
                    </div>

                )

            }
        </div>
    )
}
export default Detail;