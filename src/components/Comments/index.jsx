import React from 'react';
import block from 'bem-cn';
import { Text, Button, Textarea, IconAttach } from '@gpn-design/uikit';
import './styles.css';

const b = block('comments');
const d = block('decorator');

const Comments = (props) => {
  const { className } = props;

  return (
    <section className={b()}>
      <Text tag='h2' size='xl' view='primary' className={ d({'indent-b': 'm'}) }>Комментарии</Text>

      <div className={b('new')}>
        <Textarea view='default' wpSize='m' placeholder='Напишите комментарий' width='full' className={b('input')}/>

        <div className={ d({'distribute': 'left', 'vertical-align': 'center', 'indent-t': 'xs'}) }>
          <Button wpSize='m' view='ghost'>Отправить</Button>

          <div className={ d({'indent-l': 'xs'}) }>
            <Button wpSize='m' view='clear' iconOnly={true}>
              <IconAttach size='m' />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Comments;