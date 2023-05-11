import { Form, Input, message, Modal } from "antd";
import React from "react";

import { AddMemberToProject } from "../../../apicalls/projects";

import { getAntdFormInputRules } from "../../../utils/helpers";

function MemberForm({
  showMemberForm,
  setShowMemberForm,
  reloadData,
  project,
}) {
  console.log(project.members);
  const formRef = React.useRef(null);

  const onFinish = async (values) => {
    try {
      // check if email already exists
      const emailExists = project.members.find(
        (member) => member.user.email === values.email
      );
      if (emailExists) {
        throw new Error("User is already a member of this project");
      } else {
     
        const response = await AddMemberToProject({
          projectId: project._id,
          email: values.email,
          role: values.role,
        });
       
        if (response.success) {
          message.success(response.message);
          reloadData();
          setShowMemberForm(false);
        } else {
          message.error(response.message);
        }
      }
    } catch (error) {
    
      message.error(error.message);
    }
  };
  return (
    <Modal
      title="ADD MEMBER"
      open={showMemberForm}
      onCancel={() => setShowMemberForm(false)}
      centered
      okText="Add"
      onOk={() => {
        formRef.current.submit();
      }}
    >
      <Form layout="vertical" ref={formRef} onFinish={onFinish}>
        <Form.Item label="Email" name="email" rules={getAntdFormInputRules}>
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item label="Role" name="role" rules={getAntdFormInputRules}>
          <select>
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="employee">Empolyee</option>
          </select>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default MemberForm;