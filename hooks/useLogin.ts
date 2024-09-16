import { useState } from "react";
import axios, { HttpStatusCode } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "expo-router";

const useLogin = () => {
  const [error, setError] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (newTodo: any) => {
      setIsLoading(true);
      return await axios
        .post(`https://dev.pgproject.cl/api/v1/login`, newTodo)
        .then((res: any) => {
          if (res.status === HttpStatusCode.Ok) {
            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem("company_user", res.data.data.user.company_id);
            setIsLoading(false);
            setIsError(false);
            router.replace(`/main`);
            return res.ok;
          } else {
            setIsError(true);
            setIsLoading(false);

            return false;
          }
        })
        .catch((err: any) => {
          setIsError(true);
          setIsLoading(false);
          return false;
        });
    },
    onSuccess: (suc: any) => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      setIsLoading(false);
    },
    onError: (err: any) => {
      setIsError(true);
      setIsLoading(false);
      return false;
    },
  });

  const login = async (data: any) => {
    const { user, password } = data;

    const loginData = {
      email: user,
      password,
    };
    const response = await mutation.mutate(loginData);
    return response;
  };

  return { login, error, isLoading };
};

export default useLogin;
