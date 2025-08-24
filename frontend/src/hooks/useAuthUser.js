import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api.js"; // Assuming you have an API function to get the authenticated user

const useAuthUser = () => {
    // tanstack query - to fecth the authenticated user
    const authUser = useQuery({
        queryKey: ["authUser"],
        queryFn: getAuthUser,
        retry: false, // for auth check
    })

    return { isLoading: authUser.isLoading, authUser: authUser.data?.user }

}

export default useAuthUser