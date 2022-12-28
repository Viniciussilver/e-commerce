import * as C from './style';

import resume from '../../utils/ratings';

export const EvaluationSession = () => {
  return (
    <C.Container>
      <C.Title>Avaliação dos Clientes</C.Title>

      <C.Body>
        {resume.map((item, index) => (
          <C.ContainerItem key={index}>
            <C.Description>{item.description}</C.Description>
            <C.ResumeArea>
              <C.Icon />
              <div>
                <p className='name'>{item.name}</p>
                <span>Cliente</span>
              </div>
            </C.ResumeArea>
          </C.ContainerItem>
        ))}
      </C.Body>
    </C.Container>
  );
};
