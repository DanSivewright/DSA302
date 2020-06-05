import React from 'react'

import { Divider, Typography, Row, Col } from 'antd'

const { Title } = Typography

export const TypographyComponent = () => {
  return (
    <div className='typo__page'>
      <h1 className='nm'>Typography</h1>
      <p>Typography is a basic and foundational part of any interface design. Text is the major channel for users to understand application content and complete their work, and a well designed font system will greatly enhance the user's reading experience and work efficiency.</p>

      <h2>Headings</h2>
      <Divider />
      <Title>h1. Cloud Design - 38px</Title>
      <Title level={2}>h2. Cloud Design - 30px</Title>
      <Title level={3}>h3. Cloud Design - 24px</Title>
      <Title level={4}>h4. Cloud Design - 20px</Title>
      {/* <Title level={5}>h5. Cloud Design - 18px</Title>
      <Title level={6}>h6. Cloud Design - 16px</Title> */}

      <br />
      <br />
      <h2>Paragraph</h2>
      <Divider />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, mollitia. Perspiciatis facilis deleniti voluptatum quaerat harum odit, natus id fuga. Explicabo, sit? Ab voluptas adipisci exercitationem eaque quo non mollitia sed quam architecto, pariatur impedit officia modi quod accusantium nostrum! Nesciunt distinctio maxime explicabo, voluptas repudiandae consectetur delectus minima quas numquam pariatur dicta, voluptatem porro! In nisi, voluptas numquam recusandae dolores non tenetur sunt eius qui fugit porro quibusdam cumque laborum excepturi voluptates animi rem nobis perferendis blanditiis asperiores atque, maxime velit consequatur quam. Accusantium amet illo nam tempore reprehenderit, nostrum praesentium, consequatur maiores deleniti odit at voluptatum similique! Quasi!</p>

      <Title style={{ marginTop: '2em' }} level={4}>Body Copy - 14px : 22 Line Spacing</Title>

      <h2>Font Heirarchy</h2>
      <Divider />
      <Row style={{ marginTop: '2em' }}>
        <Col span={5}>
          <h2 style={{ color: '#E5E5E5' }}>h1</h2>
        </Col>
        <Col span={19}>
          <Title>Headline 1</Title>
        </Col>
      </Row>

      <Row style={{ marginTop: '2em' }}>
        <Col span={5}>
          <h2 style={{ color: '#E5E5E5' }}>h2</h2>
        </Col>
        <Col span={19}>
          <Title level={2}>Headline 2</Title>
        </Col>
      </Row>

      <Row style={{ marginTop: '2em' }}>
        <Col span={5}>
          <h2 style={{ color: '#E5E5E5' }}>body</h2>
        </Col>
        <Col span={19}>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        </Col>
      </Row>

      <Row style={{ marginTop: '2em' }}>
        <Col span={5}>
          <h2 style={{ color: '#E5E5E5' }}>caption</h2>
        </Col>
        <Col span={19}>
          <p style={{fontSize:'10px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, odit. At tempora corporis asperiores! Laudantium, voluptates minus incidunt atque velit maxime. Sint similique, neque in alias reiciendis odit laudantium enim a, quisquam nostrum praesentium modi eaque ipsa dolores. Accusamus excepturi reprehenderit error et sit? Enim eius sapiente unde esse quibusdam.</p>
        </Col>
      </Row>
    </div>
  )
}
