import React from "react";
import FormModal from "../../components/FormModal";
import ModalForm from "./Form";

const Create = ({
  editFormData,
  formData,
  showModal,
  closeModal,
  closeModalAndSave
}) => (
  <FormModal
    title="New"
    visible={showModal}
    handleCancel={closeModal}
    handleOk={closeModalAndSave}
  >
    <ModalForm formData={formData} editFormData={editFormData} />
  </FormModal>
);

export default Create;
