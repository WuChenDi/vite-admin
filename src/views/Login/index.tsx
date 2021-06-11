import { RuleObject, ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
import { defineComponent, reactive, ref, UnwrapRef, watch } from 'vue';

import { Form, Input, Button, InputNumber } from 'ant-design-vue';

interface FormState {
  pass: string;
  checkPass: string;
  age: number | undefined;
}

export default defineComponent({
  name: 'Login',
  components: {},
  props: {},
  setup() {
    const formRef = ref();

    const formState: UnwrapRef<FormState> = reactive({
      pass: '',
      checkPass: '',
      age: undefined,
    });

    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    };
    const tailLayout = {
      wrapperCol: { span: 14, offset: 4 },
    };

    const checkAge = async (rule: RuleObject, value: number) => {
      if (!value) {
        return Promise.reject('Please input the age');
      }
      if (!Number.isInteger(value)) {
        return Promise.reject('Please input digits');
      } else {
        if (value < 18) {
          return Promise.reject('Age must be greater than 18');
        } else {
          return Promise.resolve();
        }
      }
    };

    const validatePass = async (rule: RuleObject, value: string) => {
      console.log(rule, value);
      if (value === '') {
        return Promise.reject('Please input the password');
      } else {
        if (formState.checkPass !== '') {
          formRef.value.validateField('checkPass');
        }
        return Promise.resolve();
      }
    };

    const validatePass2 = async (rule: RuleObject, value: string) => {
      if (value === '') {
        return Promise.reject('Please input the password again');
      } else if (value !== formState.pass) {
        return Promise.reject("Two inputs don't match!");
      } else {
        return Promise.resolve();
      }
    };

    const rules = {
      pass: [{ validator: validatePass, trigger: 'change' }],
      checkPass: [{ validator: validatePass2, trigger: 'change' }],
      age: [{ validator: checkAge, trigger: 'change' }],
    };

    const handleFinish = (values: FormState) => {
      console.log('handleFinish', values);

      console.log(values, formState);
    };
    const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
      console.log('handleFinishFailed', errors);
      console.log(errors);
    };
    const resetForm = () => {
      formRef.value.resetFields();
    };

    watch(
      () => formState.pass,
      (count, prevCount) => {
        console.log('第一个监听的值', count, prevCount);
      },
      {
        deep: true,
        immediate: true,
      }
    );

    setInterval(() => {
      formState.pass++;
      // formState.pass += 1;
    }, 1000);

    return () => (
      <>
        <h1>{formState?.pass || 1}</h1>
        <Input type="text" v-model={formState.pass} />
        {/* <Form
          name="custom-validation"
          ref={formRef}
          model={formState}
          rules={rules}
          {...layout}
          onFinish={handleFinish}
          onFinishFailed={handleFinishFailed}
        >
          <Form.Item required hasFeedback label="Password" name="pass">
            <Input v-model={formState.pass} type="password" autocomplete="off" />
          </Form.Item>
          <Form.Item hasFeedback label="Confirm" name="checkPass">
            <Input v-model={formState.checkPass} type="password" autocomplete="off" />
          </Form.Item>
          <Form.Item hasFeedback label="Age" name="age">
            <InputNumber v-model={formState.age} />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" html-type="submit">
              Submit
            </Button>
            <Button style={{ marginLeft: '10px' }} onClick={resetForm}>
              Reset
            </Button>
          </Form.Item>
        </Form> */}
      </>
    );
  },
});
