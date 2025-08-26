import { useForm } from "react-hook-form";
import discountImage from "../../assets/discountImage.png";
import st from "./DiscountForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { sendDiscountRequest } from "../../store/features/discountSlice";
import { useEffect, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";

const savedForm = JSON.parse(localStorage.getItem("cart-form-discount")) || {
  name: "",
  phone: "",
  email: "",
};

const DiscountForm = () => {
  const dispatch = useDispatch();
  const [isDisabledSend, setIsDisabledSend] = useState(false); 
  const { message, loading, success, error } = useSelector(
    (state) => state.discount
  );

  const {
    register, 
    formState: { errors },
    handleSubmit,
    watch, 
    reset,
  } = useForm({
    mode: "onBlur", 
    defaultValues: savedForm,
  });

  useEffect(() => {
    const subscription = watch((value) => {
      localStorage.setItem("cart-form-discount", JSON.stringify(value));
    });
    return () => subscription.unsubscribe(); 
  }, [watch]); 

  const onSubmit = (data) => {
  
    reset({
      name: "",
      phone: "",
      email: "",
    });
    setIsDisabledSend(true); 
    dispatch(sendDiscountRequest(data));
  };

  const formValidationErrors = Object.values(errors).map((err) => err.message);
  const hasFormValidationErrors = formValidationErrors.length > 0;
 

  return (
    <div className={st.discount}>
      <div className={st.discount_banner}>
        <h2 className={st.discount_banner__title}>5% off on the first order</h2>

        <div className={st.discount_banner__content}>
          <form
            className={st.discount_banner__form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={st.discount_banner__inputs}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Minimum two characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Name is too long",
                  },
                  pattern: {
                    value: /^[A-Za-zА-Яа-я\s'-]+$/,
                    message: "Invalid name format",
                  },
                })}
                className={errors.name ? `${st["input_error"]}`: ""}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\+?(\d[\s-]?)?(\(?\d{3}\)?[\s-]?)?[\d\s-]{7,15}$/,
                    message: "Invalid phone number format",
                  },
                })}
                className={errors.phone ? `${st["input_error"]}` : ""}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email format",
                  },
                })}
                className={errors.email ? `${st["input_error"]}` : ""}
              />

              <div className={st.error_content}>
                {hasFormValidationErrors && !loading && !success && !error && (
                  <p className={st.form_general_error_message} >
                    {FaTimesCircle && (
                      <FaTimesCircle size={16} color="#dc3545" />
                    )}
                    {formValidationErrors.join(". ")}
                  </p>
                )}

                {success && message && (
                  <p className={st.success_message}>{message}</p>
                )}
                {error && <p className={st.api_error_message}>{error}</p>}
              </div>
            </div>

            <div
             className={`${st.discount_banner__button} ${success ? st.success : ""}`}>
            
              <button type="submit" disabled={isDisabledSend}>
                {success ? "Request Submitted" : "Get a discount"}
              </button>
            </div>
            <img
              src={discountImage}
              className={st.discount_banner__form_img}
              alt="discountImage"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiscountForm;
