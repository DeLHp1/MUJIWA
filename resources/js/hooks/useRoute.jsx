import {usePage} from '@inertiajs/react'
import route from "ziggy-js";

export default function useRoute(){
    let ziggy = usePage().props.ziggy;

    return (name, params = undefined, query = undefined) => route(name, params, query, );
}
