import { Customer, ValidatorInterface } from "..";
import * as yup from "yup";

export class CustomerYupValidator implements ValidatorInterface<Customer> {
  validate(entity: Customer): void {
    const { id, name, rewardPoints } = entity;

    try {
      yup.object()
        .shape({
          id: yup.string().required("Id is required"),
          name: yup.string().required("Name is required"),
          rewardsPoints: yup.number().notRequired().min(0, "Reward points must be greater than or equal to zero"),
        })
        .validateSync({ id, name, rewardPoints }, { abortEarly: false });
    } catch (errors) {
      const yupValidationError = errors as yup.ValidationError;

      yupValidationError.errors.forEach(error => {
        entity.notification.addError({
          context: "customer", message: error
        });
      });
    }
  }
}
