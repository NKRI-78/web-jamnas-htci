import Cookies from "js-cookie";
import DOMPurify from "dompurify";

import moment from "moment"
import { format } from "date-fns";
import { id } from "date-fns/locale";

export const getUserId = (): string | undefined => {
    return Cookies.get("user_id");
};

export const getUserName = (): string | undefined => {
    return Cookies.get("username");
};

export const getToken = (): string | undefined => {
    return Cookies.get("token");
};

export const handleDescriptionTruncate = (description: string, maxLength: number = 100) => {
    return description.length > maxLength ? `${description.substring(0, maxLength)}...` : description;
};

export const sanitizeHtml = (html: string): string => {
    return DOMPurify.sanitize(html);
};

export const formatDateIndo = (dateStr: string) => {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "";
    return format(date, "dd-MMMM-yyyy", { locale: id }).toUpperCase();
};

export const formatRupiah = (amount: number | string) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(Number(amount));
};

export const formatDate = (date: string | Date): string => {
    return moment(date).format("YYYY-MM-DD HH:mm:ss");
};