export let initial = {
    Projects: [
    ],
    isRun: false
}

export const request_host = async (IRequestHost) => {
    let raw = "";
    if (IRequestHost.item !== undefined) {
        raw = JSON.stringify(IRequestHost.item);
    }
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Accept-Language", "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3");
    myHeaders.append("Alt-Used", "project.it-arduino.ru");
    myHeaders.append("Sec-Fetch-Dest", "empty");
    myHeaders.append("Sec-Fetch-Mode", "cors");
    myHeaders.append("Sec-Fetch-Site", "same-origin");
    myHeaders.append("H0st", "project.it-arduin0.ru");
    let response = await fetch(`https://project.it-arduino.ru/api/${IRequestHost.url}`, {
        method: IRequestHost.item !== undefined ? 'POST' : "GET",
        headers: myHeaders,
        body: IRequestHost.item !== undefined ? raw : undefined,
    })
    return await response.json();
}


export async function projects () {
    if (!initial.isRun) {
        let response = await request_host({ url: "projects", item: undefined })
        console.log(response.status, response.data)
        if (response.status === "success") {
            initial.Projects = response.data
        }
        initial.isRun = true;
        return response.data;
    }
    return initial.Projects
}
/*

export default ProjectsReducer;*/
