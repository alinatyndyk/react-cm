import {axiosService} from "./axios.service";
import {urls} from "./urls";


const characterService = {
    getAll:() => axiosService.get(urls.character)
}

export {
    characterService
}
