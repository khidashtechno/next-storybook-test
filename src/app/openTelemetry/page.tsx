import {fetchData} from "@/api/openTelemetryApi";


export default async function SimpleSSRComponent() {
    const data = await fetchData()
    return (
        <div>
            <ul>
                {data.map((item: any) => (
                    <li style={{ marginBottom: "20px" }} key={item.id}>
                        {" "}
                        <b>
                            {item.id}. {item.title}
                        </b>
                        <p>{item.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}