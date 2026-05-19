import React, { useContext, useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import ThemeContext from "../../context/Theme/ThemeContext";
import { useQuery } from "@tanstack/react-query";
import { getFooterData } from "../../services/FooterApi";
import FooterShimmer from "../../UI/Shimmer/FooterShimmer";
import { useDispatch, useSelector } from "react-redux";
import { fetchFooterData } from "../../API/Auth/FooterThunk";

const socialIconMap = {
  facebook: FaFacebook,
  youtube: FaYoutube,
  telegram: BiLogoTelegram,
  twitter: RiTwitterXLine,
};

const Footer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFooterData());
  }, [dispatch]);

  const { theme } = useContext(ThemeContext);
  const {
    footerData = [],
    fetchLoading,
    error,
  } = useSelector((state) => state.footer);

  const darkLogo = footerData?.logos?.darkLogo;
  const lightLogo = footerData?.logos?.lightLogo;

  return (
    <footer className="footer border-t border-slate-300 shadow-sm py-6 lg:py-8 dark:bg-slate-900 dark:border-slate-600">
      <div className="footer__wrapper px-5 grid grid-cols-2 gap-y-3 md:grid-cols-3 lg:grid-cols-6">
        {!theme ? (
          <div className="footer__logo w-[8rem]">
            <img
              src={lightLogo}
              alt="dark-footer-logo"
              className="w-full h-auto object-cover"
            />
          </div>
        ) : (
          <div className="footer__logo w-[8rem]">
            <img
              src={darkLogo}
              alt="footer-logo"
              className="w-full h-auto object-cover"
            />
          </div>
        )}
        <div className="footer__social-grid dark:text-white">
          {footerData?.socialLinks?.map((social) => {
            const Icon = socialIconMap[social?.iconName];
            return (
              <div
                key={social?.id}
                className="footer__social-item flex items-center gap-2"
              >
                <Icon className="text-[0.9rem]" />
                <span className="capitalize tracking-wide font-medium text-[0.9rem]">
                  {social?.title}
                </span>
              </div>
            );
          })}
        </div>
        {footerData?.sections?.map((section) => (
          <div key={section?.id} className="footer__features-grid">
            <h4 className="tracking-wide font-medium capitalize text-[0.95rem] text-slate-900 dark:text-white">
              {section?.title}
            </h4>
            <ul className="features-list space-y-1 pt-1 pb-3">
              {section?.links?.map((link) => (
                <li
                  key={link.id}
                  className="capitalize tracking-wide font-medium text-gray-600 text-[0.9rem] dark:text-white"
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
