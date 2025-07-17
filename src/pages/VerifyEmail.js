import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { verifyEmailAction } from "../actions/authAction";

function VerifyEmail() {

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const formData = {
      id: searchParams.get("id"),
      hash: searchParams.get("hash"),
      expires: searchParams.get("expires"),
      signature: searchParams.get("signature"),
    };

    if (formData.id && formData.hash && formData.expires && formData.signature) {
      dispatch(verifyEmailAction(formData, navigate));
    } else {
      alert("Invalid verification link.");
    }
  }, [dispatch, navigate]);


  return (
    <div className="container text-center py-5">
      <h3>Verifying email...</h3>
    </div>
  );
}

export default VerifyEmail;
