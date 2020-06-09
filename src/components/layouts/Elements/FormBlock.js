import React from 'react'
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Col,
  Input,
  DatePicker,
  Cascader,
  TimePicker
} from 'antd'
import { UploadOutlined, InboxOutlined, SmileOutlined } from '@ant-design/icons'

const { Option } = Select

export const FormBlock = () => {
  return (
    <div className='form__page'>
      <h1>Form Inputs</h1>

      <Row>
        <Col style={{ paddingRight: '1em' }} md={12}>
          <Row className='form__card'>
            <Form
              name='validate_other'
              initialValues={{
                'input-number': 3,
                'checkbox-group': ['A', 'B'],
                rate: 3.5
              }}
            >
              <Form.Item
                name='select'
                label='Select'
                hasFeedback
                rules={[{ required: true, message: 'Please select your country!' }]}
              >
                <Select placeholder='Please select a country'>
                  <Option value='china'>China</Option>
                  <Option value='usa'>U.S.A</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name='select-multiple'
                label='Select[multiple]'
                rules={[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]}
              >
                <Select mode='multiple' placeholder='Please select favourite colors'>
                  <Option value='red'>Red</Option>
                  <Option value='green'>Green</Option>
                  <Option value='blue'>Blue</Option>
                </Select>
              </Form.Item>

              <Form.Item label='InputNumber'>
                <Form.Item name='input-number' noStyle>
                  <InputNumber min={1} max={10} />
                </Form.Item>
                <span className='ant-form-text'> machines</span>
              </Form.Item>

              <Form.Item name='switch' label='Switch' valuePropName='checked'>
                <Switch />
              </Form.Item>

              <Form.Item name='slider' label='Slider'>
                <Slider
                  marks={{
                    0: 'A',
                    20: 'B',
                    40: 'C',
                    60: 'D',
                    80: 'E',
                    100: 'F'
                  }}
                />
              </Form.Item>

              <Form.Item name='radio-group' label='Radio.Group'>
                <Radio.Group>
                  <Radio value='a'>item 1</Radio>
                  <Radio value='b'>item 2</Radio>
                  <Radio value='c'>item 3</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item name='radio-button' label='Radio.Button'>
                <Radio.Group>
                  <Radio.Button value='a'>item 1</Radio.Button>
                  <Radio.Button value='b'>item 2</Radio.Button>
                  <Radio.Button value='c'>item 3</Radio.Button>
                </Radio.Group>
              </Form.Item>

              <Form.Item name='checkbox-group' label='Checkbox.Group'>
                <Checkbox.Group>
                  <Row>
                    <Col span={8}>
                      <Checkbox value='A' style={{ lineHeight: '32px' }}>
                A
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value='B' style={{ lineHeight: '32px' }} disabled>
                B
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value='C' style={{ lineHeight: '32px' }}>
                C
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value='D' style={{ lineHeight: '32px' }}>
                D
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value='E' style={{ lineHeight: '32px' }}>
                E
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value='F' style={{ lineHeight: '32px' }}>
                F
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>

              <Form.Item name='rate' label='Rate'>
                <Rate />
              </Form.Item>

              <Form.Item
                name='upload'
                label='Upload'
                valuePropName='fileList'
                extra='longgggggggggggggggggggggggggggggggggg'
              >
                <Upload name='logo' action='/upload.do' listType='picture'>
                  <Button>
                    <UploadOutlined /> Click to upload
                  </Button>
                </Upload>
              </Form.Item>

              <Form.Item label='Dragger'>
                <Form.Item name='dragger' valuePropName='fileList' noStyle>
                  <Upload.Dragger name='files' action='/upload.do'>
                    <p className='ant-upload-drag-icon'>
                      <InboxOutlined />
                    </p>
                    <p className='ant-upload-text'>Click or drag file to this area to upload</p>
                    <p className='ant-upload-hint'>Support for a single or bulk upload.</p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>

              <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                <Button type='primary' htmlType='submit'>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Row>
        </Col>
        <Col style={{ paddingRight: '1em' }} md={12}>
          <Row className='form__card'>
            <Form>
              <Form.Item
                label='Fail'
                validateStatus='error'
                help='Should be combination of numbers & alphabets'
              >
                <Input placeholder='unavailable choice' id='error' />
              </Form.Item>

              <Form.Item label='Warning' validateStatus='warning'>
                <Input placeholder='Warning' id='warning' prefix={<SmileOutlined />} />
              </Form.Item>

              <Form.Item
                label='Validating'
                hasFeedback
                validateStatus='validating'
                help='The information is being validated...'
              >
                <Input placeholder="I'm the content is being validated" id='validating' />
              </Form.Item>

              <Form.Item label='Success' hasFeedback validateStatus='success'>
                <Input placeholder="I'm the content" id='success' />
              </Form.Item>

              <Form.Item label='Warning' hasFeedback validateStatus='warning'>
                <Input placeholder='Warning' id='warning2' />
              </Form.Item>

              <Form.Item
                label='Fail'
                hasFeedback
                validateStatus='error'
                help='Should be combination of numbers & alphabets'
              >
                <Input placeholder='unavailable choice' id='error2' />
              </Form.Item>

              <Form.Item label='Success' hasFeedback validateStatus='success'>
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item label='Warning' hasFeedback validateStatus='warning'>
                <TimePicker style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item label='Error' hasFeedback validateStatus='error'>
                <Select>
                  <Option value='1'>Option 1</Option>
                  <Option value='2'>Option 2</Option>
                  <Option value='3'>Option 3</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label='Validating'
                hasFeedback
                validateStatus='validating'
                help='The information is being validated...'
              >
                <Cascader options={[]} />
              </Form.Item>

              <Form.Item label='inline' style={{ marginBottom: 0 }}>
                <Form.Item
                  validateStatus='error'
                  help='Please select the correct date'
                  style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
                >
                  <DatePicker />
                </Form.Item>
                <span
                  style={{ display: 'inline-block', width: '24px', lineHeight: '32px', textAlign: 'center' }}
                >
        -
                </span>
                <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                  <DatePicker />
                </Form.Item>
              </Form.Item>

              <Form.Item label='Success' hasFeedback validateStatus='success'>
                <InputNumber style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item label='Success' hasFeedback validateStatus='success'>
                <Input allowClear placeholder='with allowClear' />
              </Form.Item>

              <Form.Item label='Warning' hasFeedback validateStatus='warning'>
                <Input.Password placeholder='with input password' />
              </Form.Item>

              <Form.Item label='Error' hasFeedback validateStatus='error'>
                <Input.Password allowClear placeholder='with input password and allowClear' />
              </Form.Item>
            </Form>,
          </Row>
        </Col>
      </Row>
    </div>
  )
}
