const Lights: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.35} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
      />

      {/* Rim Light */}
      <directionalLight
        position={[-4, -2, -6]}
        intensity={1.2}
        color="#818cf8"
      />

      <pointLight position={[0, 0, 6]} intensity={0.4} />
    </>
  );
};

export default Lights;
