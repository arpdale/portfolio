"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function WorkPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/case-study", { replace: true });
  }, [navigate]);

  return null;
}
