export const ProfilePicture = ({ src, ...rest }) => (
  <img
    src={src}
    alt="Foto de Perfil"
    className="rounded"
    width="150"
    height="150"
    {...rest}
  />
);