import { useIsMount, useModal } from "@/application/hooks";
import { safeLocalStorage } from "@/application/util";

import { Icon } from "../Icon";
import { SignUpModal } from "../Modal";

export const Profile = () => {
  const { modalOpen, onOpen, onClose } = useModal();
  const isMount = useIsMount();
  if (!isMount) return null;
  const loginState = safeLocalStorage.get("loginState");

  return (
    <div>
      {loginState ? (
        <Icon name="loginprofile" />
      ) : (
        <>
          <Icon name="notloginprofile" onClick={onOpen} />
          {modalOpen && <SignUpModal onClose={onClose} />}
        </>
      )}
    </div>
  );
};
