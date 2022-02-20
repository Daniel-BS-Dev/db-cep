import Address from "./models.js";
import { getJson } from "./request-service.js";

export default async function findByCep(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const result = await getJson(url);

    const address = new Address(result.cep, result.logradouro, null, result.localidade)
    return address;

}
