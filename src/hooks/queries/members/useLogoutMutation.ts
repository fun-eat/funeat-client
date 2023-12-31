import { useToastActionContext } from '@fun-eat/design-system';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { logoutApi } from '@/apis';
import { PATH } from '@/constants/path';

const useLogoutMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { toast } = useToastActionContext();

  return useMutation({
    mutationFn: () => logoutApi.post({ credentials: true }),
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ['member'] });
      navigate(PATH.HOME);
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message);
        return;
      }
      toast.error('로그아웃을 다시 시도해주세요.');
    },
  });
};

export default useLogoutMutation;
