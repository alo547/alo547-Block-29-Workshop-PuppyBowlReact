import { useState } from "react";
import { postNewPlayer } from "../API";

export default function NewPlayerForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [status, setStatus] = useState("");
    const [team, setTeam] = useState("");

        async function submitForm(event) {
            event.preventDefault()
            const playerData = {
                name, breed, imageUrl: imgUrl, status, team
            }
            const data = await postNewPlayer(playerData);
            console.log(data)
        }

    return (
        <div>
            <form onSubmit = {submitForm}>
                <label>
                    name:<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    breed:<input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
                </label>
                <label>
                    imgUrl:<input type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
                </label>
                <label>
                    status:<input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
                </label>
                <label>
                    team:<input type="text" value={team} onChange={(e) => setTeam(e.target.value)} />
                </label>
                <button type= "submit">Submit</button>
            </form>
        </div>
    );
}