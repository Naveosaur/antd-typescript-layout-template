import Swal from "sweetalert2";

type ConfirmationOptions = {
  title?: string;
  text?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
};

export const showDeleteConfirmation = async (
  onConfirm: () => void,
  options: ConfirmationOptions = {}
) => {
  const {
    title = "Are you sure?",
    text = "You won't be able to revert this!",
    confirmButtonText = "Yes, delete it!",
    cancelButtonText = "Cancel",
  } = options;

  const result = await Swal.fire({
    title,
    text,
    icon: "warning",
    width: 500,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText,
    cancelButtonText,
  });

  if (result.isConfirmed) {
    onConfirm();
  }
};
