import { useState } from "react";

function MyUsestate(){
    


    const [movies, setMovies] = useState(
        [{ 'id': 1, 'name': "Gajini" },
            { 'id': 2, 'name': "PK" },
            { 'id': 3, 'name': "Bahubali" },
            { 'id': 4, 'name': "KGF" },
            { 'id': 5, 'name': "kanguva" }
        ]
    )
    const newlist=movies.map((data)=> {
        return <li>{data.id},{data.name}</li>
    }
    )

    return(
        <div>
            <ol>{newlist}</ol>
        </div>
    )
}
export default MyUsestate;