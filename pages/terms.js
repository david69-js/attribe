/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function Terms() {
  return (
    <div className="wrapper__info" data-custom-classname="body">
      <h1>
        <span
          className="mt-2 block text-3xl text-center leading-8 font-extrabold
        tracking-tight text-gray-900 sm:text-4xl"
        >
          Terms and Conditions
        </span>
        <span
          className="block text-base text-center font-semibold tracking-wide
        uppercase"
          style={{ color: "gray", opacity: "0.5" }}
        >
          Last updated April 05, 2022
        </span>
      </h1>
      <div>
        <br />
      </div>
      <div
        align="center"
        style={{
          "-webkit-text-align": "left",
          "text-align": "left",
          "line-height": "1",
        }}
      >
        <br />
      </div>
      <div
        align="center"
        style={{
          "-webkit-text-align": "left",
          "text-align": "left",
          "line-height": "1",
        }}
      >
        <br />
      </div>
      <div
        align="center"
        style={{
          "-webkit-text-align": "left",
          "text-align": "left",
          "line-height": "1",
        }}
      >
        <br />
      </div>
      <div
        align="center"
        style={{
          "-webkit-text-align": "left",
          "text-align": "left",
          "line-height": "1.5",
        }}
      >
        <strong>
          <span data-custom-classname="heading_1">TABLE OF CONTENTS</span>
        </strong>
      </div>
      <div
        align="center"
        style={{
          "-webkit-text-align": "left",
          "text-align": "left",
          "line-height": "1.5",
        }}
      >
        <br />
      </div>
      <div
        align="center"
        style={{
          "-webkit-text-align": "left",
          "text-align": "left",
          "line-height": "1.5",
        }}
      >
        <a
          data-custom-classname="link"
          href="#agreement"
        >
          <span style={{ "font-size": "15px" }}>
            <span data-custom-classname="body_text">1. AGREEMENT TO TERMS</span>
          </span>
        </a>
      </div>
      <div
        align="center"
        style={{
          "-webkit-text-align": "left",
          "text-align": "left",
          "line-height": "1.5",
        }}
      >
        <a
          data-custom-classname="link"
          href="#ip"
        >
          <span data-custom-classname="body_text">
            2. INTELLECTUAL PROPERTY RIGHTS
          </span>
        </a>
      </div>
      <div
        align="center"
        style={{
          "-webkit-text-align": "left",
          "text-align": "left",
          "line-height": "1.5",
        }}
      >
        <a
          data-custom-classname="link"
          href="#userreps"
        >
          <span data-custom-classname="body_text">3. USER REPRESENTATIONS</span>
        </a>
      </div>
      <div
        align="center"
        style={{
          "-webkit-text-align": "left",
          "text-align": "left",
          "line-height": "1.5",
        }}
      >
        <bdo className="block-component">
          <span data-custom-classname="body_text" />
        </bdo>
        <a
          data-custom-classname="link"
          href="#userreg"
        >
          <span data-custom-classname="body_text">4. USER REGISTRATION</span>
        </a>
        <bdo className="statement-end-if-in-editor">
          <span data-custom-classname="body_text" />
        </bdo>
      </div>
      <div
        align="center"
        style={{
          "-webkit-text-align": "left",
          "text-align": "left",
          "line-height": "1.5",
        }}
      >
        <a
          data-custom-classname="link"
          href="#payment"
        >
          <span data-custom-classname="body_text">5. FEES AND PAYMENT</span>
        </a>
      </div>
      <div
        align="center"
        style={{
          "-webkit-text-align": "left",
          "text-align": "left",
          "line-height": "1.5",
        }}
      >
        <bdo className="block-component">
          <span data-custom-classname="body_text" />
        </bdo>
        <a
          data-custom-classname="link"
          href="#freetrial"
        >
          <span data-custom-classname="body_text">6. FREE TRIAL</span>
        </a>
        <bdo className="statement-end-if-in-editor">
          <span data-custom-classname="body_text" />
        </bdo>
      </div>
      <div
        align="center"
        style={{
          "-webkit-text-align": "left",
          "text-align": "left",
          "line-height": "1.5",
        }}
      >
        <a
          data-custom-classname="link"
          href="#cancel"
        >
          <span data-custom-classname="body_text">7. CANCELLATION</span>
        </a>
      </div>
      <div
        align="center"
        style={{
          "-webkit-text-align": "left",
          "text-align": "left",
          "line-height": "1.5",
        }}
      >
        <bdo className="block-component">
          <span data-custom-classname="body_text" />
        </bdo>
      </div>
      <div
        align="center"
        style={{
          "-webkit-text-align": "left",
          "text-align": "left",
          "line-height": "1.5",
        }}
      >
        <a
          data-custom-classname="link"
          href="#prohibited"
        >
          <span data-custom-classname="body_text">8. PROHIBITED ACTIVITIES</span>
        </a>
      </div>
      <div
        align="center"
        style={{
          "-webkit-text-align": "left",
          "text-align": "left",
          "line-height": "1.5",
        }}
      >
        <a
          data-custom-classname="link"
          href="#ugc"
        >
          <span data-custom-classname="body_text">
            9. USER GENERATED CONTRIBUTIONS
          </span>
        </a>
      </div>
      <div
        align="center"
        style={{
          "-webkit-text-align": "left",
          "text-align": "left",
          "line-height": "1.5",
        }}
      >
        <a
          data-custom-classname="link"
          href="#license"
        >
          <span data-custom-classname="body_text">10. CONTRIBUTION LICENSE</span>
        </a>
      </div>
      <div
        align="center"
        style={{
          "-webkit-text-align": "left",
          "text-align": "left",
          "line-height": "1.5",
        }}
      >
        <bdo className="block-component">
          <span data-custom-classname="body_text" />
        </bdo>
      </div>
      <div
        align="center"
        style={{
          "-webkit-text-align": "left",
          "text-align": "left",
          "line-height": "1.5",
        }}
      >
        <bdo className="block-component">
          <span data-custom-classname="body_text" />
        </bdo>
      </div>
      <div style={{ "line-height": "1.5" }}>
        <bdo className="block-component">
          <span data-custom-classname="body_text" />
        </bdo>
        <a
          data-custom-classname="link"
          href="#socialmedia"
        >
          <span data-custom-classname="body_text">11. SOCIAL MEDIA</span>
        </a>
        <bdo className="statement-end-if-in-editor">
          <span data-custom-classname="body_text" />
        </bdo>
      </div>
      <div style={{ "line-height": "1.5" }}>
        <a
          data-custom-classname="link"
          href="#submissions"
        >
          <span data-custom-classname="body_text">12. SUBMISSIONS</span>
        </a>
      </div>
      <div style={{ "line-height": "1.5" }}>
        <bdo className="block-component">
          <span data-custom-classname="body_text" />
        </bdo>
        <a
          data-custom-classname="link"
          href="#thirdparty"
        >
          <span data-custom-classname="body_text">
            13. THIRD-PARTY WEBSITES AND CONTENT
          </span>
        </a>
        <bdo className="statement-end-if-in-editor">
          <span data-custom-classname="body_text" />
        </bdo>
      </div>
      <div style={{ "line-height": "1.5" }}>
        <bdo className="block-component">
          <span data-custom-classname="body_text" />
        </bdo>
      </div>
      <div style={{ "line-height": "1.5" }}>
        <bdo className="block-component">
          <span data-custom-classname="body_text" />
        </bdo>
        <a
          data-custom-classname="link"
          href="#usrights"
        >
          <span data-custom-classname="body_text">14. U.S. GOVERNMENT RIGHTS</span>
        </a>
        <bdo className="statement-end-if-in-editor">
          <span data-custom-classname="body_text" />
        </bdo>
      </div>
      <div style={{ "line-height": "1.5" }}>
        <a
          data-custom-classname="link"
          href="#sitemanage"
        >
          <span data-custom-classname="body_text">15. SITE MANAGEMENT</span>
        </a>
      </div>
      <div style={{ "line-height": "1.5" }}>
        <bdo className="block-component">
          <span data-custom-classname="body_text" />
        </bdo>
        <a
          data-custom-classname="link"
          href="#privacypolicy1"
        >
          <span data-custom-classname="body_text">16. PRIVACY POLICY</span>
        </a>
        <bdo className="statement-end-if-in-editor">
          <span data-custom-classname="body_text" />
        </bdo>
        <bdo className="block-component">
          <span data-custom-classname="body_text" />
        </bdo>
      </div>
      <div style={{ "line-height": "1.5" }}>
        <bdo className="block-component">
          <span data-custom-classname="body_text" />
        </bdo>
      </div>
      <div style={{ "line-height": "1.5" }}>
        <bdo className="block-component">
          <span data-custom-classname="body_text" />
        </bdo>
        <span data-custom-classname="body_text">
          <bdo className="block-component" />
          <bdo className="block-component" />
        </span>
      </div>
      <div style={{ "line-height": "1.5" }}>
        <a
          data-custom-classname="link"
          href="#terms"
        >
          <span data-custom-classname="body_text">17. TERM AND TERMINATION</span>
        </a>
      </div>
      <div style={{ "line-height": "1.5" }}>
        <a
          data-custom-classname="link"
          href="#modifications"
        >
          <span data-custom-classname="body_text">
            18. MODIFICATIONS AND INTERRUPTIONS
          </span>
        </a>
      </div>
      <div style={{ "line-height": "1.5" }}>
        <a
          data-custom-classname="link"
          href="#law"
        >
          <span data-custom-classname="body_text">19. GOVERNING LAW</span>
        </a>
      </div>
      <div style={{ "line-height": "1.5" }}>
        <a
          data-custom-classname="link"
          href="#disputes"
        >
          <span data-custom-classname="body_text">20. DISPUTE RESOLUTION</span>
        </a>
      </div>
      <div style={{ "line-height": "1.5" }}>
        <a
          data-custom-classname="link"
          href="#corrections"
        >
          <span data-custom-classname="body_text">21. CORRECTIONS</span>
        </a>
      </div>
      <div style={{ "line-height": "1.5" }}>
        <a
          data-custom-classname="link"
          href="#disclaimer"
        >
          <span data-custom-classname="body_text">22. DISCLAIMER</span>
        </a>
      </div>
      <div style={{ "line-height": "1.5" }}>
        <a
          data-custom-classname="link"
          href="#liability"
        >
          <span data-custom-classname="body_text">
            23. LIMITATIONS OF LIABILITY
          </span>
        </a>
      </div>
      <div style={{ "line-height": "1.5" }}>
        <a
          data-custom-classname="link"
          href="#indemnification"
        >
          <span data-custom-classname="body_text">24. INDEMNIFICATION</span>
        </a>
      </div>
      <div style={{ "line-height": "1.5" }}>
        <a
          data-custom-classname="link"
          href="#userdata"
        >
          <span data-custom-classname="body_text">25. USER DATA</span>
        </a>
      </div>
      <div style={{ "line-height": "1.5" }}>
        <a
          data-custom-classname="link"
          href="#electronic"
        >
          <span data-custom-classname="body_text">
            26. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
          </span>
        </a>
      </div>
      <div style={{ "line-height": "1.5" }}>
        <bdo className="block-component">
          <span data-custom-classname="body_text" />
        </bdo>
        <a
          data-custom-classname="link"
          href="#california"
        >
          <span data-custom-classname="body_text">
            27. CALIFORNIA USERS AND RESIDENTS
          </span>
        </a>
        <bdo className="statement-end-if-in-editor">
          <span data-custom-classname="body_text" />
        </bdo>
      </div>
      <div style={{ "line-height": "1.5" }}>
        <a
          data-custom-classname="link"
          href="#misc"
        >
          <span data-custom-classname="body_text">28. MISCELLANEOUS</span>
        </a>
      </div>
      <div style={{ "line-height": "1.5" }}>
        <a
          data-custom-classname="link"
          href="#contact"
        >
          <span data-custom-classname="body_text">29. CONTACT US</span>
        </a>
      </div>
      <div
        align="center"
        style={{
          "-webkit-text-align": "left",
          "text-align": "left",
          "line-height": "1.5",
        }}
      >
        <br />
      </div>
      <div
        align="center"
        style={{
          "-webkit-text-align": "left",
          "text-align": "left",
          "line-height": "1.5",
        }}
      >
        <br />
      </div>
      <div
        align="center"
        style={{
          "-webkit-text-align": "left",
          "text-align": "left",
          "line-height": "1.5",
        }}
      >
        <div
          className="MsoNormal"
          data-custom-classname="heading_1"
          id="agreement"
          style={{ "line-height": "1.5" }}
        >
          <a name="_6aa3gkhykvst" />
          <strong>
            <span
              style={{
                "line-height": "115%",
                "font-family": "Arial",
                "font-size": "19px",
              }}
            >
              1. AGREEMENT TO TERMS
            </span>
          </strong>
        </div>

        <>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <br />
          </div>
          <div>
            <div
              className="MsoNormal"
              data-custom-classname="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "rgb(  89,   89,   89)",
                }}
              >
                These Terms of Use constitute a legally binding agreement made
                between you, whether personally or on behalf of an entity
                (“you”) and
                <bdo
                  className="block-container question question-in-editor"
                  data-id="9d459c4e-c548-e5cb-7729-a11854 8965d2"
                  data-type="question"
                >
                  Attribe, Inc.
                </bdo>
              </span>
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#595959",
                  msoThemecolor: "text1",
                  msoThemetint: 166,
                }}
              >
                <bdo className="block-component" />, doing business as{" "}
                <bdo className="question">Wellspring Attribution</bdo>
                <bdo className="statement-end-if-in-editor" />
                &nbsp;
              </span>
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "rgb(  89,   89,   89)",
                }}
              >
                ("
                <bdo className="block-component" />
                <bdo className="question">
                  <strong>Wellspring Attribution</strong>
                </bdo>
                <bdo className="else-block" />
                ", “<strong>we</strong>”, “<strong>us</strong>”, or “
                <strong>our</strong>”), concerning your access to and use of the{" "}
                <bdo
                  className="block-container question question-in-editor"
                  data-id="fdf30452-99b8-c68b-5cdf-34af764cd1fd"
                  data-type="question"
                >
                  <a
                    href="http://wellspringattribution.com/"
                    target="_blank"
                    data-custom-classname="link"
                  >
                    http://wellspringattribution.com
                  </a>
                </bdo>
                website as well as any other media form, media channel, mobile
                website or mobile application related, linked, or otherwise
                connected thereto (collectively, the “Site”).
                <span
                  style={{
                    fontSize: "11.0pt",
                    lineHeight: "115%",
                    msoFareastFontFamily: "Calibri",
                    color: "#595959",
                    msoThemecolor: "text1",
                    msoThemetint: 166,
                  }}
                >
                  <span
                    style={{
                      fontSize: "11.0pt",
                      lineHeight: "115%",
                      msoFareastFontFamily: "Calibri",
                      color: "#595959",
                      msoThemecolor: "text1",
                      msoThemetint: 166,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11.0pt",
                        lineHeight: "115%",
                        msoFareastFontFamily: "Calibri",
                        color: "#595959",
                        msoThemecolor: "text1",
                        msoThemetint: 166,
                      }}
                    >
                      <bdo className="question">
                        <bdo className="block-component" />
                      </bdo>
                      <span
                        style={{
                          fontSize: "11.0pt",
                          lineHeight: "115%",
                          msoFareastFontFamily: "Calibri",
                          color: "#595959",
                          msoThemecolor: "text1",
                          msoThemetint: 166,
                        }}
                      >
                        <bdo className="block-component" />
                      </span>
                      We are registered in <bdo className="block-component" />
                      <bdo className="block-component" />
                      <bdo className="block-component" />{" "}
                      <span
                        style={{
                          fontSize: "11.0pt",
                          lineHeight: "115%",
                          msoFareastFontFamily: "Calibri",
                          color: "#595959",
                          msoThemecolor: "text1",
                          msoThemetint: 166,
                        }}
                      >
                        <span
                          style={{
                            fontSize: "11.0pt",
                            lineHeight: "115%",
                            msoFareastFontFamily: "Calibri",
                            color: "#595959",
                            msoThemecolor: "text1",
                            msoThemetint: 166,
                          }}
                        >
                          <bdo className="question">California</bdo>,
                          <bdo className="question">United States</bdo>
                        </span>
                      </span>
                      <bdo className="statement-end-if-in-editor" />
                      <bdo className="block-component" />
                    </span>
                  </span>
                </span>
              </span>
              and have our registered office at{" "}
              <bdo className="question">3802 The Strand</bdo>
              <bdo className="block-component" />,{" "}
              <bdo className="question">Manhattan Beach</bdo>
              <span style={{ fontSize: 15 }}>
                <span data-custom-classname="body_text">
                  <span style={{ fontSize: 15 }}>
                    <span data-custom-classname="body_text">
                      <span style={{ color: "rgb( 89,  89,   89)" }}>
                        <bdo className="block-component" />
                        <bdo className="block-component" />,{" "}
                        <bdo className="question">CA</bdo>
                        <bdo className="statement-end-if-in-editor" />
                        <bdo className="block-component" />
                        <bdo className="block-component" />
                        <bdo className="question">90266</bdo>
                        <bdo className="statement-end-if-in-editor" />
                      </span>
                    </span>
                  </span>
                </span>
              </span>
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  msoFareastFontFamily: "Calibri",
                  color: "#595959",
                  msoThemecolor: "text1",
                  msoThemetint: 166,
                }}
              >
                <span
                  style={{
                    fontSize: "11.0pt",
                    lineHeight: "115%",
                    msoFareastFontFamily: "Calibri",
                    color: "#595959",
                    msoThemecolor: "text1",
                    msoThemetint: 166,
                  }}
                >
                  <bdo className="statement-end-if-in-editor">.</bdo>
                  <bdo className="else-block" />
                </span>
              </span>
              <bdo className="statement-end-if-in-editor" />
              <bdo className="block-component" /> You agree that by accessing
              the Site, you have read, understood, and agree to be bound by all
              of these Terms of Use
              <bdo
                className="block-container if"
                data-type="if"
                id="c4a4c609-d962-97d8-9b96-d3492402adad"
              >
                <bdo data-type="conditional-block">
                  <bdo
                    className="block-component"
                    data-record-question-key="separate_agreement_option"
                    data-type="statement"
                  ></bdo>
                </bdo>
                . IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU
                ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU
                MUST&nbsp;DISCONTINUE USE IMMEDIATELY.
              </bdo>
            </div>
          </div>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <br />
          </div>
          <div>
            <div
              className="MsoNormal"
              data-custom-classname="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span style={{ fontSize: 15 }}>
                <span
                  style={{
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    color: "rgb(  89, 89,  89)",
                  }}
                >
                  Supplemental terms and conditions or documents that may be
                  posted on the Site from time to time are hereby expressly
                  incorporated herein by reference. We reserve the right, in our
                  sole discretion, to make changes or modifications to these
                  Terms of Use <bdo className="block-component" />
                  from time to time
                  <bdo className="else-block" />. We will alert you about any
                  changes by updating the “Last updated” date of these Terms of
                  Use, and you waive any right to receive specific notice of
                  each such change. Please ensure that you check the applicable
                  Terms every time you use our Site so that you understand which
                  Terms apply. You will be subject to, and will be deemed to
                  have been made aware of and to have accepted, the changes in
                  any revised Terms of Use by your continued use of the Site
                  after the date such revised Terms of Use are posted.
                </span>
              </span>
            </div>
          </div>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <br />
          </div>
          <div>
            <div
              className="MsoNormal"
              data-custom-classname="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "rgb(  89,   89,   89)",
                }}
              >
                The information provided on the Site is not intended for
                distribution to or use by any person or entity in any
                jurisdiction or country where such distribution or use would be
                contrary to law or regulation or which would subject us to any
                registration requirement within such jurisdiction or country.
                Accordingly, those persons who choose to access the Site from
                other locations do so on their own initiative and are solely
                responsible for compliance with local laws, if and to the extent
                local laws are applicable.
              </span>
            </div>
            <div
              className="MsoNormal"
              data-custom-classname="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#595959",
                  msoThemecolor: "text1",
                  msoThemetint: 166,
                }}
              >
                <bdo className="block-component" />
                <bdo className="block-component" />
              </span>
            </div>
            <div
              className="MsoNormal"
              data-custom-classname="body_text"
              style={{ lineHeight: 1 }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-classname="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#595959",
                  msoThemecolor: "text1",
                  msoThemetint: 166,
                }}
              >
                The Site is not tailored to comply with industry-specific
                regulations (Health Insurance Portability and Accountability Act
                (HIPAA), Federal Information Security Management Act (FISMA),
                etc.), so if your interactions would be subjected to such laws,
                you may not use this Site. You may not use the Site in a way
                that would violate the Gramm-Leach-Bliley Act (GLBA).
                <bdo className="block-component" />
                <bdo className="statement-end-if-in-editor" />
              </span>
            </div>
            <div
              className="MsoNormal"
              data-custom-classname="body_text"
              style={{ lineHeight: 1 }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-classname="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <bdo
                className="block-container if"
                data-type="if"
                id="a2595956-7028-dbe5-123e-d3d3a93ed076"
              >
                <bdo data-type="conditional-block">
                  <span style={{ fontSize: 15 }}>
                    <bdo
                      className="block-component"
                      data-record-question-key="user_o18_option"
                      data-type="statement"
                    />
                  </span>
                  <bdo data-type="body">
                    <span
                      style={{
                        fontSize: 15,
                        lineHeight: "115%",
                        fontFamily: "Arial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      The Site is intended for users who are at least 18 years
                      old. Persons under the age of 18 are not permitted to use
                      or
                    </span>
                    <span
                      style={{
                        fontSize: "11.0pt",
                        lineHeight: "115%",
                        fontFamily: "Arial",
                        color: "#595959",
                        msoThemecolor: "text1",
                        msoThemetint: 166,
                      }}
                    >
                      &nbsp;
                    </span>
                    <span
                      style={{
                        fontSize: 15,
                        lineHeight: "115%",
                        fontFamily: "Arial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      register for the Site.
                    </span>
                  </bdo>
                </bdo>
                <bdo data-type="conditional-block">
                  <bdo data-type="body">
                    <span style={{ color: "rgb( 89,  89,  89)", fontSize: 15 }}>
                      <bdo className="block-component" />
                    </span>
                  </bdo>
                </bdo>
              </bdo>
            </div>
          </div>
          <div>
            <br />
          </div>
          <div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-classname="heading_1"
              id="ip"
              style={{ lineHeight: "1.5" }}
            >
              <a name="_b6y29mp52qvx" />
              <strong>
                <span
                  style={{
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    fontSize: 19,
                  }}
                >
                  2. INTELLECTUAL PROPERTY RIGHTS
                </span>
              </strong>
            </div>
          </div>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <br />
          </div>
          <div>
            <div
              className="MsoNormal"
              data-custom-classname="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "rgb(  89,   89,   89)",
                }}
              >
                Unless otherwise indicated, the Site is our proprietary property
                and all source code, databases, functionality, software, website
                designs, audio, video, text, photographs, and graphics on the
                Site (collectively, the “Content”) and the trademarks, service
                marks, and logos contained therein (the “Marks”) are owned or
                controlled by us or licensed to us, and are protected by
                copyright and trademark laws and various other intellectual
                property rights and unfair competition laws of the United
                States, international copyright laws, and international
                conventions. The Content and the Marks are provided on the Site
                “AS IS” for your information and personal use only. Except as
                expressly provided in these Terms of Use, no part of the Site
                and no Content or Marks may be copied, reproduced, aggregated,
                republished, uploaded, posted, publicly displayed, encoded,
                translated, transmitted, distributed, sold, licensed, or
                otherwise exploited for any commercial purpose whatsoever,
                without our express prior written permission.
              </span>
            </div>
          </div>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <br />
          </div>
          <div>
            <div
              className="MsoNormal"
              data-custom-classname="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "rgb(  89,   89,   89)",
                }}
              >
                Provided that you are eligible to use the Site, you are granted
                a limited license to access and use the Site and to download or
                print a copy of any portion of the Content to which you have
                properly gained access solely for your personal, non-commercial
                use. We reserve all rights not expressly granted to you in and
                to the Site, the Content and the Marks.
              </span>
            </div>
          </div>
          <div>
            <br />
          </div>
          <div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-classname="heading_1"
              id="userreps"
              style={{ lineHeight: "1.5" }}
            >
              <a name="_5hg7kgyv9l8z" />
              <strong>
                <span
                  style={{
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    fontSize: 19,
                  }}
                >
                  3. USER REPRESENTATIONS
                </span>
              </strong>
            </div>
          </div>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="body_text"
            style={{ lineHeight: "1.5" }}
          >
            <span
              style={{
                fontSize: 15,
                lineHeight: "115%",
                fontFamily: "Arial",
                color: "rgb(  89,   89,   89)",
              }}
            >
              By using the Site, you represent and warrant that:
            </span>
            <bdo
              className="block-container if"
              data-type="if"
              id="d2d82ca8-275f-3f86-8149-8a5ef8054af6"
            >
              <bdo data-type="conditional-block">
                <bdo
                  className="block-component"
                  data-record-question-key="user_account_option"
                  data-type="statement"
                >
                  <span style={{ fontSize: 15 }} />
                </bdo>
                <bdo data-type="body">
                  <span
                    style={{ color: "rgb( 89,  89,  89)", fontSize: "11pt" }}
                  >
                    &nbsp;(
                  </span>
                  <span style={{ color: "rgb( 89,  89,  89)", fontSize: 15 }}>
                    1)
                  </span>
                  <span
                    style={{ color: "rgb( 89,  89,  89)", fontSize: "11pt" }}
                  >
                    &nbsp;
                  </span>
                  <span style={{ color: "rgb( 89,  89,  89)", fontSize: 15 }}>
                    all registration information you submit will be true,
                    accurate, current, and complete; (
                  </span>
                  <span style={{ fontSize: 15 }}>
                    <span style={{ color: "rgb( 89,  89,  89)" }}>2</span>
                  </span>
                  <span style={{ color: "rgb( 89,  89,  89)", fontSize: 15 }}>
                    ) you will maintain the accuracy of such information and
                    promptly update such registration information
                  </span>
                  <span
                    style={{ color: "rgb( 89,  89,  89)", fontSize: "11pt" }}
                  >
                    &nbsp;
                  </span>
                  <span style={{ color: "rgb( 89,  89,   89)", fontSize: 15 }}>
                    as necessary;
                  </span>
                </bdo>
              </bdo>
              <bdo className="statement-end-if-in-editor" data-type="close">
                <span style={{ fontSize: 15 }} />
              </bdo>
              &nbsp;
            </bdo>
            <span style={{ color: "rgb( 89,  89,  89)", fontSize: 15 }}>(</span>
            <span style={{ fontSize: 15 }}>
              <span style={{ color: "rgb( 89,  89,  89)" }}>3</span>
            </span>
            <span style={{ color: "rgb( 89,  89,  89)", fontSize: 15 }}>
              ) you have the legal capacity and you agree to comply with these
              Terms of Use;
              <bdo className="block-component" />
            </span>
            <span style={{ color: "rgb( 89,  89,  89)", fontSize: 15 }}>(</span>
            <span style={{ fontSize: 15 }}>
              <span style={{ color: "rgb( 89,  89,  89)" }}>4</span>
            </span>
            <span style={{ color: "rgb( 89,  89,  89)", fontSize: 15 }}>
              ) you are not a minor in the jurisdiction in which you reside
              <bdo
                className="block-container if"
                data-type="if"
                id="76948fab-ec9e-266a-bb91-94  8929c050c9"
              >
                <bdo data-type="conditional-block">
                  <bdo
                    className="block-component"
                    data-record-question-key="user_o18_option"
                    data-type="statement"
                  />
                </bdo>
              </bdo>
            </span>
            <span style={{ color: "rgb( 89,  89,  89)", fontSize: "11pt" }}>
              &nbsp;
            </span>
            <span style={{ color: "rgb( 89,  89,  89)", fontSize: 15 }}>(</span>
            <span style={{ fontSize: 15 }}>
              <span style={{ color: "rgb( 89,  89,  89)" }}>5</span>
            </span>
            <span style={{ color: "rgb( 89,  89,  89)", fontSize: 15 }}>
              ) you will not access the Site through automated or non-human
              means, whether through a bot, script or otherwise;
            </span>
            <span style={{ color: "rgb( 89,  89,  89)", fontSize: "11pt" }}>
              &nbsp;
            </span>
            <span style={{ color: "rgb( 89,  89,  89)", fontSize: 15 }}>(</span>
            <span style={{ fontSize: 15 }}>
              <span style={{ color: "rgb( 89,  89,  89)" }}>6</span>
            </span>
            <span style={{ color: "rgb( 89,  89,  89)", fontSize: 15 }}>
              ) you will not use the Site for any illegal or unauthorized
              purpose; and (
            </span>
            <span style={{ fontSize: 15 }}>
              <span style={{ color: "rgb( 89,  89,  89)" }}>7</span>
            </span>
            <span style={{ color: "rgb( 89,  89,  89)", fontSize: 15 }}>
              ) your use of the Site will not violate any applicable law or
              regulation.
            </span>
          </div>

          <div>
            <div
              className="MsoNormal"
              data-custom-classname="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "rgb(  89,   89,   89)",
                }}
              >
                If you provide any information that is untrue, inaccurate, not
                current, or incomplete, we have the right to suspend or
                terminate your account and refuse any and all current or future
                use of the Site (or any portion thereof).
              </span>
            </div>
            <div
              className="MsoNormal"
              style={{ textAlign: "justify", lineHeight: "1.5" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              style={{ textAlign: "justify", lineHeight: "1.5" }}
            >
              <br />
            </div>
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: 1 }}
          >
            <bdo
              className="block-container if"
              data-type="if"
              id="d13abc62-cc6f-e059-7fd6-cb6208085aa7"
            >
              <bdo data-type="conditional-block">
                <bdo
                  className="block-component"
                  data-record-question-key="user_account_option"
                  data-type="statement"
                />
                <bdo data-type="body">
                  <div
                    className="MsoNormal"
                    data-custom-classname="heading_1"
                    id="userreg"
                    style={{ lineHeight: "1.5", textAlign: "left" }}
                  >
                    <strong>
                      <span
                        style={{
                          lineHeight: "115%",
                          fontFamily: "Arial",
                          fontSize: 19,
                        }}
                      >
                        4. USER REGISTRATION
                      </span>
                    </strong>
                  </div>
                </bdo>
              </bdo>
            </bdo>
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: 1 }}
          >
            <br />
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: 1 }}
          >
            <bdo className="block-container if" data-type="if">
              <bdo data-type="conditional-block">
                <bdo data-type="body">
                  <div className="MsoNormal" data-custom-classname="body_text">
                    <span
                      style={{
                        fontSize: 15,
                        lineHeight: "115%",
                        fontFamily: "Arial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      You may be required to register with the Site. You agree
                      to keep your password confidential and will be responsible
                      for all use of your account and password. We reserve the
                      right to remove, reclaim, or change a username you select
                      if we determine, in our sole discretion, that such
                      username is inappropriate, obscene, or otherwise
                      objectionable.
                    </span>
                  </div>
                </bdo>
              </bdo>
            </bdo>
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: "1.5" }}
          >
            <br />
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: "1.5" }}
          >
            <br />
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: "1.5" }}
          >
            <bdo className="block-container if" data-type="if">
              <bdo className="statement-end-if-in-editor" data-type="close" />
            </bdo>
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="heading_1"
            id="payment"
            style={{ lineHeight: "1.5" }}
          >
            <a name="_ynub0jdx8pob" />
            <strong>
              <span
                style={{
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  fontSize: 19,
                }}
              >
                5. FEES AND PAYMENT
              </span>
            </strong>
          </div>
          <div className="MsoNormal" style={{ lineHeight: 1 }}>
            <span
              style={{
                fontSize: "11.0pt",
                lineHeight: "115%",
                fontFamily: "Arial",
                color: "#595959",
                msoThemecolor: "text1",
                msoThemetint: 166,
              }}
            >
              <br />
            </span>
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="body_text"
            style={{ lineHeight: "1.5" }}
          >
            <span style={{ color: "rgb( 89,  89,  89)", fontSize: 15 }}>
              We accept the following forms of payment:
            </span>
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: 1 }}
          >
            <div className="MsoNormal" style={{ lineHeight: "17.25px" }}>
              <div
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: 1, textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{
                  marginLeft: "46.9pt",
                  textIndent: "-18.55pt",
                  lineHeight: "1.5",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontSize: 15,
                    lineHeight: "16.8667px",
                    color: "rgb(  89,   89,   89)",
                  }}
                >
                  <bdo
                    className="block-container forloop"
                    data-type="forloop"
                    id="a6e21b8e-b955-c546-15dd-bb6eda2fe88a"
                  >
                    <bdo data-type="conditional-block">
                      <bdo
                        className="forloop-component"
                        data-record-question-key="payment_list"
                        data-type="statement"
                      ></bdo>
                    </bdo>
                  </bdo>
                </span>
              </div>
            </div>
            <span
              style={{
                fontSize: "11.0pt",
                lineHeight: "115%",
                fontFamily: "Arial",
                color: "#595959",
                msoThemecolor: "text1",
                msoThemetint: 166,
              }}
            >
              <div
                className="MsoNormal"
                style={{ lineHeight: 1, textAlign: "left" }}
              >
                <br />
              </div>
            </span>
            <span
              style={{
                fontSize: 15,
                lineHeight: "115%",
                fontFamily: "Arial",
                color: "rgb(  89,   89,   89)",
              }}
            >
              <div
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span
                  style={{ lineHeight: "115%", color: "rgb( 89,  89,  89)" }}
                >
                  You may be required to purchase or pay a fee to access some of
                  our services. You agree to provide current, complete, and
                  accurate purchase and account information for all purchases
                  made via the Site. You further agree to promptly update
                  account and payment information, including email address,
                  payment method, and payment card expiration date, so that we
                  can complete your transactions and contact you as needed. We
                  bill you through an online billing account for purchases made
                  via the Site. Sales tax will be added to the price of
                  purchases as deemed required by us. We may change prices at
                  any time. All payments shall be in{" "}
                  <bdo className="question">__________</bdo>.
                </span>
              </div>
            </span>
            <span
              style={{
                fontSize: "11.0pt",
                lineHeight: "115%",
                fontFamily: "Arial",
                color: "#595959",
                msoThemecolor: "text1",
                msoThemetint: 166,
              }}
            >
              <div
                className="MsoNormal"
                style={{ lineHeight: 1, textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span
                  style={{
                    fontSize: 15,
                    lineHeight: "115%",
                    color: "rgb(  89, 89,  89)",
                  }}
                >
                  You agree to pay all charges or fees at the prices then in
                  effect for your purchases, and you authorize us to charge your
                  chosen payment provider for any such amounts upon making your
                  purchase.{" "}
                  <bdo
                    className="block-container if"
                    data-type="if"
                    id="2955e4e9-b2fc-b1ce-6d2e-99ed4a0c390d"
                  >
                    <bdo data-type="conditional-block">
                      <bdo
                        className="block-component"
                        data-record-question-key="recurring_charge_option"
                        data-type="statement"
                      />
                    </bdo>
                  </bdo>
                  <bdo
                    className="block-container if"
                    data-type="if"
                    id="2955e4e9-b2fc-b1ce-6d2e-99ed4a0c390d"
                  >
                    <bdo data-type="conditional-block">
                      <bdo data-type="body">If&nbsp;</bdo>
                    </bdo>
                  </bdo>
                  <bdo
                    className="block-container if"
                    data-type="if"
                    id="2955e4e9-b2fc-b1ce-6d2e-99ed4a0c390d"
                  >
                    <bdo data-type="conditional-block">
                      <bdo data-type="body">
                        your purchase is subject to recurring charges, then you
                        consent to our charging your payment method on a
                        recurring basis without requiring your prior approval
                        for each recurring charge, until you notify us of your
                        cancellation.
                      </bdo>
                    </bdo>
                  </bdo>
                  <bdo
                    className="block-container if"
                    data-type="if"
                    id="2955e4e9-b2fc-b1ce-6d2e-99ed4a0c390d"
                  >
                    <bdo
                      className="statement-end-if-in-editor"
                      data-type="close"
                    />
                  </bdo>
                </span>
              </div>
              <br />
            </span>
            <span
              style={{
                fontSize: 15,
                lineHeight: "115%",
                fontFamily: "Arial",
                color: "rgb(  89,   89,   89)",
              }}
            >
              <div
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span
                  style={{ lineHeight: "115%", color: "rgb( 89,  89,  89)" }}
                >
                  We reserve the right to correct any errors or mistakes in
                  pricing, even if we have already requested or received
                  payment. We also reserve the right to refuse any order placed
                  through the Site.
                </span>
              </div>
            </span>
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: "1.5" }}
          >
            <br />
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: "1.5" }}
          >
            <br />
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: 1 }}
          >
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <a name="_drzjqilz2ujm" />
            </div>
            <bdo
              className="block-container if"
              data-type="if"
              id="4380167d-5abe-b98f-f3 89-f707429e6c52"
            >
              <bdo data-type="conditional-block">
                <bdo
                  className="block-component"
                  data-record-question-key="free_trial_option"
                  data-type="statement"
                />
                <bdo data-type="body">
                  <div
                    className="MsoNormal"
                    data-custom-classname="heading_1"
                    id="freetrial"
                    style={{ textAlign: "left", lineHeight: "1.5" }}
                  >
                    <strong>
                      <span
                        style={{
                          lineHeight: "115%",
                          fontFamily: "Arial",
                          fontSize: 19,
                        }}
                      >
                        6. FREE TRIAL
                      </span>
                    </strong>
                  </div>
                </bdo>
              </bdo>
            </bdo>
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: 1 }}
          >
            <br />
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: 1 }}
          >
            <bdo className="block-container if" data-type="if">
              <bdo data-type="conditional-block">
                <bdo data-type="body">
                  <div
                    className="MsoNormal"
                    data-custom-classname="body_text"
                    style={{ lineHeight: "1.5", textAlign: "left" }}
                  >
                    <span
                      style={{
                        fontSize: 15,
                        lineHeight: "115%",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      We offer a{" "}
                      <bdo
                        className="block-container
                    question question-in-editor"
                        data-id="3f053c87-320c-4c3a-2d73-c199bf826436"
                        data-type="question"
                      >
                        30
                      </bdo>
                      -day free trial to new users who register with the Site.{" "}
                      <bdo className="block-component" />
                      <bdo className="question">
                        The account will not be charged and the subscription
                        will be suspended until upgraded to a paid version
                      </bdo>
                    </span>
                    <span
                      style={{
                        fontSize: "11.0pt",
                        lineHeight: "115%",
                        color: "#595959",
                        msoThemecolor: "text1",
                        msoThemetint: 166,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 15,
                          lineHeight: "115%",
                          color: "rgb(  89,   89,   89)",
                        }}
                      >
                        <bdo className="else-block" />
                      </span>
                      at the end of the free trial.
                    </span>
                  </div>
                </bdo>
              </bdo>
            </bdo>
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: "1.5" }}
          >
            <br />
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: "1.5" }}
          >
            <br />
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: "1.5" }}
          >
            <bdo className="block-container if" data-type="if">
              <bdo className="statement-end-if-in-editor" data-type="close">
                <span style={{ fontSize: 15 }} />
              </bdo>
            </bdo>
            <div
              className="MsoNormal"
              data-custom-classname="heading_1"
              id="cancel"
            >
              <a name="_e993diqrk0qx" />
              <strong>
                <span
                  style={{
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    fontSize: 19,
                  }}
                >
                  7. CANCELLATION
                </span>
              </strong>
            </div>
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: 1 }}
          >
            <br />
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: "1.5" }}
          >
            <div
              className="MsoNormal"
              data-custom-classname="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  color: "rgb(  89,   89, 89)",
                }}
              >
                <bdo
                  className="block-container if"
                  data-type="if"
                  id="cef55cf6-3a65-8031-d0c3-cffe36e64f10"
                >
                  <bdo data-type="conditional-block">
                    <bdo
                      className="block-component"
                      data-record-question-key="return_option"
                      data-type="statement"
                    />
                  </bdo>
                </bdo>
                <bdo
                  className="block-container if"
                  data-type="if"
                  id="cef55cf6-3a65-8031-d0c3-cffe36e64f10"
                >
                  <bdo data-type="conditional-block">
                    <bdo data-type="body">
                      All purchases are non-refundable.
                    </bdo>
                  </bdo>
                </bdo>
                <bdo
                  className="block-container if"
                  data-type="if"
                  id="cef55cf6-3a65-8031-d0c3-cffe36e64f10"
                >
                  <bdo data-type="conditional-block">
                    <bdo data-type="body">&nbsp;</bdo>
                  </bdo>
                </bdo>
                <bdo
                  className="block-container if"
                  data-type="if"
                  id="cef55cf6-3a65-8031-d0c3-cffe36e64f10"
                >
                  <bdo
                    className="statement-end-if-in-editor"
                    data-type="close"
                  />
                </bdo>
                You can cancel your subscription at any time
              </span>
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  color: "#595959",
                  msoThemecolor: "text1",
                  msoThemetint: 166,
                }}
              >
                &nbsp;
              </span>
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  color: "rgb(  89,   89, 89)",
                }}
              >
                <bdo
                  className="block-container if"
                  data-type="if"
                  id="1a40a488-252c-f087-02cc-5e0de451aa88"
                >
                  <bdo data-type="conditional-block">
                    <bdo
                      className="block-component"
                      data-record-question-key="cancel_how"
                      data-type="statement"
                    />
                  </bdo>
                </bdo>
                <bdo
                  className="block-container if"
                  data-type="if"
                  id="1a40a488-252c-f087-02cc-5e0de451aa88"
                >
                  <bdo data-type="conditional-block">
                    <bdo data-type="body">by logging</bdo>
                  </bdo>
                </bdo>
              </span>
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  color: "#595959",
                  msoThemecolor: "text1",
                  msoThemetint: 166,
                }}
              >
                <bdo
                  className="block-container if"
                  data-type="if"
                  id="1a40a488-252c-f087-02cc-5e0de451aa88"
                >
                  <bdo data-type="conditional-block">
                    <bdo data-type="body">&nbsp;</bdo>
                  </bdo>
                </bdo>
              </span>
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  color: "rgb(  89,   89, 89)",
                }}
              >
                <bdo
                  className="block-container if"
                  data-type="if"
                  id="1a40a488-252c-f087-02cc-5e0de451aa88"
                >
                  <bdo data-type="conditional-block">
                    <bdo data-type="body">into your account</bdo>
                  </bdo>
                </bdo>
                <bdo
                  className="block-container if"
                  data-type="if"
                  id="1a40a488-252c-f087-02cc-5e0de451aa88"
                >
                  <bdo data-type="conditional-block">
                    <bdo
                      className="block-component"
                      data-record-question-key="null"
                      data-type="statement"
                    />
                  </bdo>
                  . Your cancellation will take effect at the end of the current
                  paid term.
                </bdo>
              </span>
            </div>
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: 1 }}
          >
            <br />
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: "1.5" }}
          >
            <div
              className="MsoNormal"
              data-custom-classname="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  color: "rgb(  89,   89, 89)",
                }}
              >
                If you are unsatisfied with our services, please email us at{" "}
                <bdo
                  className="block-container question question-in-editor"
                  data-id="7c40698b-5cc8-bb58-245d-2fbd1b57dfba"
                  data-type="question"
                >
                  ryan@wellspringattribution.com
                </bdo>
                <bdo className="block-component" /> or call us at
              </span>
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  color: "#595959",
                  msoThemecolor: "text1",
                  msoThemetint: 166,
                }}
              >
                &nbsp;
              </span>
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  color: "rgb(  89,   89, 89)",
                }}
              >
                <bdo
                  className="block-container question question-in-editor"
                  data-id="7d27e26e-2e8b-6d22-d41d-b468e8115f39"
                  data-type="question"
                >
                  6508234349
                </bdo>
              </span>
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  color: "#595959",
                  msoThemecolor: "text1",
                  msoThemetint: 166,
                }}
              >
                <span
                  style={{
                    fontSize: "11.0pt",
                    lineHeight: "115%",
                    color: "#595959",
                    msoThemecolor: "text1",
                    msoThemetint: 166,
                  }}
                >
                  <span
                    style={{
                      fontSize: 15,
                      lineHeight: "115%",
                      color: "rgb(  89, 89,  89)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 15,
                        lineHeight: "115%",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      <bdo className="statement-end-if-in-editor" />
                    </span>
                  </span>
                </span>
                .
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div className="MsoNormal" style={{ lineHeight: 1 }}>
              <bdo
                className="block-container if"
                data-type="if"
                id="b671a946-ab46-9fff-9cee-e88149335e8e"
              >
                <bdo data-type="conditional-block">
                  <bdo
                    className="block-component"
                    data-record-question-key="software_option"
                    data-type="statement"
                  />
                </bdo>
              </bdo>
            </div>
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="heading_1"
            id="prohibited"
            style={{ lineHeight: "1.5", textAlign: "left" }}
          >
            <a name="_h284p8mrs3r7" />
            <strong>
              <span
                style={{
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  fontSize: 19,
                }}
              >
                8. PROHIBITED ACTIVITIES
              </span>
            </strong>
          </div>
          <div className="MsoNormal" style={{ lineHeight: 1 }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="body_text"
            style={{ lineHeight: "1.5" }}
          >
            <span
              style={{
                fontSize: 15,
                lineHeight: "115%",
                fontFamily: "Arial",
                color: "rgb(  89,   89,   89)",
              }}
            >
              You may not access or use the Site for any purpose other than that
              for which we make the Site available. The Site may not be used in
              connection with any commercial endeavors except those that are
              specifically endorsed or approved by us.
            </span>
          </div>
          <div className="MsoNormal" style={{ lineHeight: 1 }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: "115%" }}
          >
            <div
              className="MsoNormal"
              data-custom-classname="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "16.8667px",
                  color: "rgb( 89,  89,   89)",
                }}
              >
                As a user of the Site, you agree not to:
              </span>
            </div>
            <ul>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span
                  style={{
                    fontSize: "11pt",
                    lineHeight: "16.8667px",
                    color: "rgb(  89,   89,   89)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: 15,
                      fontStyle: "normal",
                      fontVariantLigatures: "normal",
                      fontVariantCaps: "normal",
                      fontWeight: 400,
                      letterSpacing: "normal",
                      orphans: 2,
                      textAlign: "justify",
                      textIndent: "-29.4px",
                      textTransform: "none",
                      whiteSpace: "normal",
                      widows: 2,
                      wordSpacing: 0,
                      WebkitTextStrokeWidth: 0,
                      backgroundColor: "rgb(255,255, 255)",
                      textDecorationStyle: "initial",
                      textDecorationColor: "initial",
                      color: "rgb(  89,   89,   89)",
                    }}
                  >
                    Systematically retrieve data or other content from the Site
                    to create or compile, directly or indirectly, a collection,
                    compilation, database, or directory without written
                    permission from us.
                  </span>
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span
                    style={{
                      lineHeight: "16.8667px",
                      color: "rgb( 89,  89,  89)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontStyle: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        orphans: 2,
                        textAlign: "justify",
                        textIndent: "-29.4px",
                        textTransform: "none",
                        whiteSpace: "normal",
                        widows: 2,
                        wordSpacing: 0,
                        WebkitTextStrokeWidth: 0,
                        backgroundColor: "rgb(255, 255, 255)",
                        textDecorationStyle: "initial",
                        textDecorationColor: "initial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      <span
                        style={{
                          lineHeight: "16.8667px",
                          color: "rgb(  89,   89, 89)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "justify",
                            textIndent: "-29.4px",
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(255, 255, 255)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            color: "rgb(  89,   89, 89)",
                          }}
                        >
                          Trick, defraud, or mislead us and other users,
                          especially in any attempt to learn sensitive account
                          information such as user passwords.
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span
                    style={{
                      lineHeight: "16.8667px",
                      color: "rgb( 89,  89,  89)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontStyle: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        orphans: 2,
                        textAlign: "justify",
                        textIndent: "-29.4px",
                        textTransform: "none",
                        whiteSpace: "normal",
                        widows: 2,
                        wordSpacing: 0,
                        WebkitTextStrokeWidth: 0,
                        backgroundColor: "rgb(255, 255, 255)",
                        textDecorationStyle: "initial",
                        textDecorationColor: "initial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      <span
                        style={{
                          lineHeight: "16.8667px",
                          color: "rgb(  89,   89, 89)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "justify",
                            textIndent: "-29.4px",
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(255, 255, 255)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            color: "rgb(  89,   89, 89)",
                          }}
                        >
                          Circumvent, disable, or otherwise interfere with
                          security-related features of the Site, including
                          features that prevent or restrict the use or copying
                          of any Content or enforce limitations on the use of
                          the Site and/or the Content contained therein.
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span
                    style={{
                      lineHeight: "16.8667px",
                      color: "rgb( 89,  89,  89)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontStyle: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        orphans: 2,
                        textAlign: "justify",
                        textIndent: "-29.4px",
                        textTransform: "none",
                        whiteSpace: "normal",
                        widows: 2,
                        wordSpacing: 0,
                        WebkitTextStrokeWidth: 0,
                        backgroundColor: "rgb(255, 255, 255)",
                        textDecorationStyle: "initial",
                        textDecorationColor: "initial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      <span
                        style={{
                          lineHeight: "16.8667px",
                          color: "rgb(  89,   89, 89)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "justify",
                            textIndent: "-29.4px",
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(255, 255, 255)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            color: "rgb(  89,   89, 89)",
                          }}
                        >
                          Disparage, tarnish, or otherwise harm, in our opinion,
                          us and/or the Site.
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span
                    style={{
                      lineHeight: "16.8667px",
                      color: "rgb( 89,  89,  89)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontStyle: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        orphans: 2,
                        textAlign: "justify",
                        textIndent: "-29.4px",
                        textTransform: "none",
                        whiteSpace: "normal",
                        widows: 2,
                        wordSpacing: 0,
                        WebkitTextStrokeWidth: 0,
                        backgroundColor: "rgb(255, 255, 255)",
                        textDecorationStyle: "initial",
                        textDecorationColor: "initial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      <span
                        style={{
                          lineHeight: "16.8667px",
                          color: "rgb(  89,   89, 89)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "justify",
                            textIndent: "-29.4px",
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(255, 255, 255)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            color: "rgb(  89,   89, 89)",
                          }}
                        >
                          Use any information obtained from the Site in order to
                          harass, abuse, or harm another person.
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span
                    style={{
                      lineHeight: "16.8667px",
                      color: "rgb( 89,  89,  89)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontStyle: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        orphans: 2,
                        textAlign: "justify",
                        textIndent: "-29.4px",
                        textTransform: "none",
                        whiteSpace: "normal",
                        widows: 2,
                        wordSpacing: 0,
                        WebkitTextStrokeWidth: 0,
                        backgroundColor: "rgb(255, 255, 255)",
                        textDecorationStyle: "initial",
                        textDecorationColor: "initial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      <span
                        style={{
                          lineHeight: "16.8667px",
                          color: "rgb(  89,   89, 89)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "justify",
                            textIndent: "-29.4px",
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(255, 255, 255)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            color: "rgb(  89,   89, 89)",
                          }}
                        >
                          Make improper use of our support services or submit
                          false reports of abuse or misconduct.
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span
                    style={{
                      lineHeight: "16.8667px",
                      color: "rgb( 89,  89,  89)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontStyle: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        orphans: 2,
                        textAlign: "justify",
                        textIndent: "-29.4px",
                        textTransform: "none",
                        whiteSpace: "normal",
                        widows: 2,
                        wordSpacing: 0,
                        WebkitTextStrokeWidth: 0,
                        backgroundColor: "rgb(255, 255, 255)",
                        textDecorationStyle: "initial",
                        textDecorationColor: "initial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      <span
                        style={{
                          lineHeight: "16.8667px",
                          color: "rgb(  89,   89, 89)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "justify",
                            textIndent: "-29.4px",
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(255, 255, 255)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            color: "rgb(  89,   89, 89)",
                          }}
                        >
                          Use the Site in a manner inconsistent with any
                          applicable laws or regulations.
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span
                    style={{
                      lineHeight: "16.8667px",
                      color: "rgb( 89,  89,  89)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontStyle: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        orphans: 2,
                        textAlign: "justify",
                        textIndent: "-29.4px",
                        textTransform: "none",
                        whiteSpace: "normal",
                        widows: 2,
                        wordSpacing: 0,
                        WebkitTextStrokeWidth: 0,
                        backgroundColor: "rgb(255, 255, 255)",
                        textDecorationStyle: "initial",
                        textDecorationColor: "initial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      <span
                        style={{
                          lineHeight: "16.8667px",
                          color: "rgb(  89,   89,89)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "justify",
                            textIndent: "-29.4px",
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(255, 255, 255)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            color: "rgb( 89,  89,89)",
                          }}
                        >
                          Engage in unauthorized framing of or linking to the
                          Site.
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span
                    style={{
                      lineHeight: "16.8667px",
                      color: "rgb( 89,  89,  89)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontStyle: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        orphans: 2,
                        textAlign: "justify",
                        textIndent: "-29.4px",
                        textTransform: "none",
                        whiteSpace: "normal",
                        widows: 2,
                        wordSpacing: 0,
                        WebkitTextStrokeWidth: 0,
                        backgroundColor: "rgb(255, 255, 255)",
                        textDecorationStyle: "initial",
                        textDecorationColor: "initial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      <span
                        style={{
                          lineHeight: "16.8667px",
                          color: "rgb(  89,   89,89)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "justify",
                            textIndent: "-29.4px",
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(255, 255, 255)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            color: "rgb( 89,  89,89)",
                          }}
                        >
                          Upload or transmit (or attempt to upload or to
                          transmit) viruses, Trojan horses, or other material,
                          including excessive use of capital letters and
                          spamming (continuous posting of repetitive text), that
                          interferes with any party’s uninterrupted use and
                          enjoyment of the Site or modifies, impairs, disrupts,
                          alters, or interferes with the use, features,
                          functions, operation, or maintenance of the Site.
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span
                    style={{
                      lineHeight: "16.8667px",
                      color: "rgb( 89,  89,  89)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontStyle: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        orphans: 2,
                        textAlign: "justify",
                        textIndent: "-29.4px",
                        textTransform: "none",
                        whiteSpace: "normal",
                        widows: 2,
                        wordSpacing: 0,
                        WebkitTextStrokeWidth: 0,
                        backgroundColor: "rgb(255, 255, 255)",
                        textDecorationStyle: "initial",
                        textDecorationColor: "initial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      <span
                        style={{
                          lineHeight: "16.8667px",
                          color: "rgb(  89,   89, 89)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "justify",
                            textIndent: "-29.4px",
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(255, 255, 255)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            color: "rgb(  89,   89, 89)",
                          }}
                        >
                          Engage in any automated use of the system, such as
                          using scripts to send comments or messages, or using
                          any data mining, robots, or similar data gathering and
                          extraction tools.
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span
                    style={{
                      lineHeight: "16.8667px",
                      color: "rgb( 89,  89,  89)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontStyle: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        orphans: 2,
                        textAlign: "justify",
                        textIndent: "-29.4px",
                        textTransform: "none",
                        whiteSpace: "normal",
                        widows: 2,
                        wordSpacing: 0,
                        WebkitTextStrokeWidth: 0,
                        backgroundColor: "rgb(255, 255, 255)",
                        textDecorationStyle: "initial",
                        textDecorationColor: "initial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      <span
                        style={{
                          lineHeight: "16.8667px",
                          color: "rgb(  89,   89, 89)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "justify",
                            textIndent: "-29.4px",
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(255, 255, 255)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            color: "rgb(  89,   89, 89)",
                          }}
                        >
                          Delete the copyright or other proprietary rights
                          notice from any Content.
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span
                    style={{
                      lineHeight: "16.8667px",
                      color: "rgb( 89,  89,  89)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontStyle: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        orphans: 2,
                        textAlign: "justify",
                        textIndent: "-29.4px",
                        textTransform: "none",
                        whiteSpace: "normal",
                        widows: 2,
                        wordSpacing: 0,
                        WebkitTextStrokeWidth: 0,
                        backgroundColor: "rgb(255, 255, 255)",
                        textDecorationStyle: "initial",
                        textDecorationColor: "initial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      <span
                        style={{
                          lineHeight: "16.8667px",
                          color: "rgb(  89,   89, 89)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "justify",
                            textIndent: "-29.4px",
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(255, 255, 255)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            color: "rgb(  89,   89, 89)",
                          }}
                        >
                          Attempt to impersonate another user or person or use
                          the username of another user.
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span
                    style={{
                      lineHeight: "16.8667px",
                      color: "rgb( 89,  89,  89)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontStyle: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        orphans: 2,
                        textAlign: "justify",
                        textIndent: "-29.4px",
                        textTransform: "none",
                        whiteSpace: "normal",
                        widows: 2,
                        wordSpacing: 0,
                        WebkitTextStrokeWidth: 0,
                        backgroundColor: "rgb(255, 255, 255)",
                        textDecorationStyle: "initial",
                        textDecorationColor: "initial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      <span
                        style={{
                          lineHeight: "16.8667px",
                          color: "rgb(  89,   89,89)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "justify",
                            textIndent: "-29.4px",
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(255, 255, 255)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            color: "rgb( 89,  89,89)",
                          }}
                        >
                          Upload or transmit (or attempt to upload or to
                          transmit) any material that acts as a passive or
                          active information collection or transmission
                          mechanism, including without limitation, clear
                          graphics interchange formats (“gifs”), 1×1 pixels, web
                          bugs, cookies, or other similar devices (sometimes
                          referred to as “spyware” or “passive collection
                          mechanisms” or “pcms”).
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span
                    style={{
                      lineHeight: "16.8667px",
                      color: "rgb( 89,  89,  89)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontStyle: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        orphans: 2,
                        textAlign: "justify",
                        textIndent: "-29.4px",
                        textTransform: "none",
                        whiteSpace: "normal",
                        widows: 2,
                        wordSpacing: 0,
                        WebkitTextStrokeWidth: 0,
                        backgroundColor: "rgb(255, 255, 255)",
                        textDecorationStyle: "initial",
                        textDecorationColor: "initial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      <span
                        style={{
                          lineHeight: "16.8667px",
                          color: "rgb(  89,   89,89)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "justify",
                            textIndent: "-29.4px",
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(255, 255, 255)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            color: "rgb( 89,  89,89)",
                          }}
                        >
                          Interfere with, disrupt, or create an undue burden on
                          the Site or the networks or services connected to the
                          Site.
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span
                    style={{
                      lineHeight: "16.8667px",
                      color: "rgb( 89,  89,  89)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontStyle: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        orphans: 2,
                        textAlign: "justify",
                        textIndent: "-29.4px",
                        textTransform: "none",
                        whiteSpace: "normal",
                        widows: 2,
                        wordSpacing: 0,
                        WebkitTextStrokeWidth: 0,
                        backgroundColor: "rgb(255, 255, 255)",
                        textDecorationStyle: "initial",
                        textDecorationColor: "initial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      <span
                        style={{
                          lineHeight: "16.8667px",
                          color: "rgb(  89,   89,89)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "justify",
                            textIndent: "-29.4px",
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(255, 255, 255)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            color: "rgb( 89,  89,89)",
                          }}
                        >
                          Harass, annoy, intimidate, or threaten any of our
                          employees or agents engaged in providing any portion
                          of the Site to you.
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span
                    style={{
                      lineHeight: "16.8667px",
                      color: "rgb( 89,  89,  89)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontStyle: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        orphans: 2,
                        textAlign: "justify",
                        textIndent: "-29.4px",
                        textTransform: "none",
                        whiteSpace: "normal",
                        widows: 2,
                        wordSpacing: 0,
                        WebkitTextStrokeWidth: 0,
                        backgroundColor: "rgb(255, 255, 255)",
                        textDecorationStyle: "initial",
                        textDecorationColor: "initial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      <span
                        style={{
                          lineHeight: "16.8667px",
                          color: "rgb(  89,   89,89)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "justify",
                            textIndent: "-29.4px",
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(255, 255, 255)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            color: "rgb( 89,  89,89)",
                          }}
                        >
                          Attempt to bypass any measures of the Site designed to
                          prevent or restrict access to the Site, or any portion
                          of the Site.
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span
                    style={{
                      lineHeight: "16.8667px",
                      color: "rgb( 89,  89,  89)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontStyle: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        orphans: 2,
                        textAlign: "justify",
                        textIndent: "-29.4px",
                        textTransform: "none",
                        whiteSpace: "normal",
                        widows: 2,
                        wordSpacing: 0,
                        WebkitTextStrokeWidth: 0,
                        backgroundColor: "rgb(255, 255, 255)",
                        textDecorationStyle: "initial",
                        textDecorationColor: "initial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      <span
                        style={{
                          lineHeight: "16.8667px",
                          color: "rgb(  89,   89,89)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "justify",
                            textIndent: "-29.4px",
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(255, 255, 255)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            color: "rgb( 89,  89,89)",
                          }}
                        >
                          Copy or adapt the Site’s software, including but not
                          limited to Flash, PHP, HTML, JavaScript, or other
                          code.
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span
                    style={{
                      lineHeight: "16.8667px",
                      color: "rgb( 89,  89,  89)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontStyle: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        orphans: 2,
                        textAlign: "justify",
                        textIndent: "-29.4px",
                        textTransform: "none",
                        whiteSpace: "normal",
                        widows: 2,
                        wordSpacing: 0,
                        WebkitTextStrokeWidth: 0,
                        backgroundColor: "rgb(255, 255, 255)",
                        textDecorationStyle: "initial",
                        textDecorationColor: "initial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      <span
                        style={{
                          lineHeight: "16.8667px",
                          color: "rgb(  89,   89,89)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "justify",
                            textIndent: "-29.4px",
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(255, 255, 255)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            color: "rgb( 89,  89,89)",
                          }}
                        >
                          Except as permitted by applicable law, decipher,
                          decompile, disassemble, or reverse engineer any of the
                          software comprising or in any way making up a part of
                          the Site.
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span
                    style={{
                      lineHeight: "16.8667px",
                      color: "rgb( 89,  89,  89)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontStyle: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        orphans: 2,
                        textAlign: "justify",
                        textIndent: "-29.4px",
                        textTransform: "none",
                        whiteSpace: "normal",
                        widows: 2,
                        wordSpacing: 0,
                        WebkitTextStrokeWidth: 0,
                        backgroundColor: "rgb(255, 255, 255)",
                        textDecorationStyle: "initial",
                        textDecorationColor: "initial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      <span
                        style={{
                          lineHeight: "16.8667px",
                          color: "rgb(  89,   89,89)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "justify",
                            textIndent: "-29.4px",
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(255, 255, 255)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            color: "rgb( 89,  89,89)",
                          }}
                        >
                          Except as may be the result of standard search engine
                          or Internet browser usage, use, launch, develop, or
                          distribute any automated system, including without
                          limitation, any spider, robot, cheat utility, scraper,
                          or offline reader that accesses the Site, or using or
                          launching any unauthorized script or other software.
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span
                    style={{
                      lineHeight: "16.8667px",
                      color: "rgb( 89,  89,  89)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontStyle: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        orphans: 2,
                        textAlign: "justify",
                        textIndent: "-29.4px",
                        textTransform: "none",
                        whiteSpace: "normal",
                        widows: 2,
                        wordSpacing: 0,
                        WebkitTextStrokeWidth: 0,
                        backgroundColor: "rgb(255, 255, 255)",
                        textDecorationStyle: "initial",
                        textDecorationColor: "initial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      <span
                        style={{
                          lineHeight: "16.8667px",
                          color: "rgb(  89,   89,89)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "justify",
                            textIndent: "-29.4px",
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(255, 255, 255)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            color: "rgb( 89,  89,89)",
                          }}
                        >
                          Use a buying agent or purchasing agent to make
                          purchases on the Site.
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span
                    style={{
                      lineHeight: "16.8667px",
                      color: "rgb( 89,  89,  89)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontStyle: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        orphans: 2,
                        textAlign: "justify",
                        textIndent: "-29.4px",
                        textTransform: "none",
                        whiteSpace: "normal",
                        widows: 2,
                        wordSpacing: 0,
                        WebkitTextStrokeWidth: 0,
                        backgroundColor: "rgb(255, 255, 255)",
                        textDecorationStyle: "initial",
                        textDecorationColor: "initial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      <span
                        style={{
                          lineHeight: "16.8667px",
                          color: "rgb(  89,   89,89)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "justify",
                            textIndent: "-29.4px",
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(255, 255, 255)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            color: "rgb( 89,  89,89)",
                          }}
                        >
                          Make any unauthorized use of the Site, including
                          collecting usernames and/or email addresses of users
                          by electronic or other means for the purpose of
                          sending unsolicited email, or creating user accounts
                          by automated means or under false pretenses.
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span
                    style={{
                      lineHeight: "16.8667px",
                      color: "rgb( 89,  89,  89)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "sans-serif",
                        fontStyle: "normal",
                        fontVariantLigatures: "normal",
                        fontVariantCaps: "normal",
                        fontWeight: 400,
                        letterSpacing: "normal",
                        orphans: 2,
                        textAlign: "justify",
                        textIndent: "-29.4px",
                        textTransform: "none",
                        whiteSpace: "normal",
                        widows: 2,
                        wordSpacing: 0,
                        WebkitTextStrokeWidth: 0,
                        backgroundColor: "rgb(255, 255, 255)",
                        textDecorationStyle: "initial",
                        textDecorationColor: "initial",
                        color: "rgb(  89,   89,   89)",
                      }}
                    >
                      <span
                        style={{
                          lineHeight: "16.8667px",
                          color: "rgb(  89,   89,89)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "justify",
                            textIndent: "-29.4px",
                            textTransform: "none",
                            whiteSpace: "normal",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(255, 255, 255)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            color: "rgb( 89,  89,89)",
                          }}
                        >
                          Use the Site as part of any effort to compete with us
                          or otherwise use the Site and/or the Content for any
                          revenue-generating endeavor or commercial enterprise.
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  style={{
                    fontSize: 15,
                    lineHeight: "16.8667px",
                    color: "rgb( 89,  89,  89)",
                  }}
                >
                  <bdo className="forloop-component" />
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span
                  style={{
                    fontSize: 15,
                    lineHeight: "16.8667px",
                    color: "rgb(  89,   89,   89)",
                  }}
                >
                  <bdo className="question">
                    Use the Site to advertise or offer to sell goods and
                    services.
                  </bdo>
                </span>
                <span
                  style={{
                    fontSize: 15,
                    lineHeight: "16.8667px",
                    color: "rgb(  89,   89,   89)",
                  }}
                >
                  <bdo className="forloop-component" />
                </span>
              </li>
              <li
                className="MsoNormal"
                data-custom-classname="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span
                  style={{
                    fontSize: 15,
                    lineHeight: "16.8667px",
                    color: "rgb(  89,   89,   89)",
                  }}
                >
                  <bdo className="question">
                    Sell or otherwise transfer your profile.
                  </bdo>
                </span>
                <span
                  style={{
                    fontSize: 15,
                    lineHeight: "16.8667px",
                    color: "rgb(  89,   89,   89)",
                  }}
                >
                  <bdo className="forloop-component" />
                </span>
              </li>
            </ul>
          </div>

          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <bdo className="block-container if" data-type="if">
              <bdo data-type="conditional-block">
                <bdo data-type="body">
                  <div
                    className="MsoNormal"
                    data-custom-classname="heading_1"
                    id="ugc"
                    style={{ lineHeight: "1.5" }}
                  >
                    <strong>
                      <span
                        style={{
                          lineHeight: "115%",
                          fontFamily: "Arial",
                          fontSize: 19,
                        }}
                      >
                        9. USER GENERATED CONTRIBUTIONS
                      </span>
                    </strong>
                  </div>
                </bdo>
              </bdo>
            </bdo>
          </div>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <br />
          </div>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <bdo className="block-container if" data-type="if">
              <bdo data-type="conditional-block">
                <bdo data-type="body">
                  <div
                    className="MsoNormal"
                    style={{ textAlign: "justify", lineHeight: "115%" }}
                  >
                    <div
                      className="MsoNormal"
                      data-custom-classname="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span
                        style={{
                          fontSize: 15,
                          lineHeight: "16.8667px",
                          color: "rgb(89, 89, 89)",
                        }}
                      >
                        <bdo
                          className="block-container if"
                          data-type="if"
                          id="24327c5d-a34f-f7e7-88f1-65a2f788484f"
                        >
                          <bdo data-type="conditional-block">
                            <bdo
                              className="block-component"
                              data-record-question-key="user_post_content_option"
                              data-type="statement"
                            >
                              <span style={{ fontSize: 15 }} />
                            </bdo>
                            The Site does not offer users to submit or post
                            content. We may provide you with the opportunity to
                            create, submit, post, display, transmit, perform,
                            publish, distribute, or broadcast content and
                            materials to us or on the Site, including but not
                            limited to text, writings, video, audio,
                            photographs, graphics, comments, suggestions, or
                            personal information or other material
                            (collectively, "Contributions"). Contributions may
                            be viewable by other users of the Site and through
                            third-party websites. As such, any Contributions you
                            transmit may be treated in accordance with the Site
                            Privacy Policy. When you create or make available
                            any Contributions, you thereby represent and warrant
                            that:
                            <bdo
                              className="block-container if"
                              data-type="if"
                              id="b671a946-ab46-9fff-9cee-e88149335e8e"
                            >
                              <bdo
                                className="statement-end-if-in-editor"
                                data-type="close"
                              />
                            </bdo>
                          </bdo>
                        </bdo>
                      </span>
                    </div>
                    <ul>
                      <li
                        className="MsoNormal"
                        data-custom-classname="body_text"
                        style={{ lineHeight: "1.5", textAlign: "left" }}
                      >
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          <span style={{ fontSize: 14 }}>
                            The creation, distribution, transmission, public
                            display, or performance, and the accessing,
                            downloading, or copying of your Contributions do not
                            and will not infringe the proprietary rights,
                            including but not limited to the copyright, patent,
                            trademark, trade secret, or moral rights of any
                            third party.
                          </span>
                        </span>
                      </li>
                      <li
                        className="MsoNormal"
                        data-custom-classname="body_text"
                        style={{ lineHeight: "1.5", textAlign: "left" }}
                      >
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          <span style={{ fontSize: 14 }}>
                            You are the creator and owner of or have the
                            necessary licenses, rights, consents, releases, and
                            permissions to use and to authorize us, the Site,
                            and other users of the Site to use your
                            Contributions in any manner contemplated by the Site
                            and these Terms of Use.
                          </span>
                        </span>
                      </li>
                      <li
                        className="MsoNormal"
                        data-custom-classname="body_text"
                        style={{ lineHeight: "1.5", textAlign: "left" }}
                      >
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          <span style={{ fontSize: 14 }}>
                            You have the written consent, release, and/or
                            permission of each and every identifiable individual
                            person in your Contributions to use the name or
                            likeness of each and every such identifiable
                            individual person to enable inclusion and use of
                            your Contributions in any manner contemplated by the
                            Site and these Terms of Use.
                          </span>
                        </span>
                      </li>
                      <li
                        className="MsoNormal"
                        data-custom-classname="body_text"
                        style={{ lineHeight: "1.5", textAlign: "left" }}
                      >
                        <span style={{ color: "rgb(89, 89,89)" }}>
                          <span style={{ fontSize: 14 }}>
                            Your Contributions are not false, inaccurate, or
                            misleading.
                          </span>
                        </span>
                      </li>
                      <li
                        className="MsoNormal"
                        data-custom-classname="body_text"
                        style={{ lineHeight: "1.5", textAlign: "left" }}
                      >
                        <span style={{ color: "rgb(89, 89,89)" }}>
                          <span style={{ fontSize: 14 }}>
                            Your Contributions are not unsolicited or
                            unauthorized advertising, promotional materials,
                            pyramid schemes, chain letters, spam, mass mailings,
                            or other forms of solicitation.
                          </span>
                        </span>
                      </li>
                      <li
                        className="MsoNormal"
                        data-custom-classname="body_text"
                        style={{ lineHeight: "1.5", textAlign: "left" }}
                      >
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          <span style={{ fontSize: 14 }}>
                            Your Contributions are not obscene, lewd,
                            lascivious, filthy, violent, harassing, libelous,
                            slanderous, or otherwise objectionable (as
                            determined by us).
                          </span>
                        </span>
                      </li>
                      <li
                        className="MsoNormal"
                        data-custom-classname="body_text"
                        style={{ lineHeight: "1.5", textAlign: "left" }}
                      >
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          <span style={{ fontSize: 14 }}>
                            Your Contributions do not ridicule, mock, disparage,
                            intimidate, or abuse anyone.
                          </span>
                        </span>
                      </li>
                      <li
                        className="MsoNormal"
                        data-custom-classname="body_text"
                        style={{ lineHeight: "1.5", textAlign: "left" }}
                      >
                        <span style={{ color: "rgb(89, 89,89)" }}>
                          <span style={{ fontSize: 14 }}>
                            Your Contributions are not used to harass or
                            threaten (in the legal sense of those terms) any
                            other person and to promote violence against a
                            specific person or class of people.
                            <br />
                          </span>
                        </span>
                      </li>
                      <li
                        className="MsoNormal"
                        data-custom-classname="body_text"
                        style={{ lineHeight: "1.5", textAlign: "left" }}
                      >
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          <span style={{ fontSize: 14 }}>
                            Your Contributions do not violate any applicable
                            law, regulation, or rule.
                            <br />
                          </span>
                        </span>
                      </li>
                      <li
                        className="MsoNormal"
                        data-custom-classname="body_text"
                        style={{ lineHeight: "1.5", textAlign: "left" }}
                      >
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          <span style={{ fontSize: 14 }}>
                            Your Contributions do not violate the privacy or
                            publicity rights of any third party.
                            <br />
                          </span>
                        </span>
                      </li>
                      <li
                        className="MsoNormal"
                        data-custom-classname="body_text"
                        style={{ lineHeight: "1.5", textAlign: "left" }}
                      >
                        <span style={{ color: "rgb(89, 89,89)" }}>
                          <span style={{ fontSize: 14 }}>
                            Your Contributions do not violate any applicable law
                            concerning child pornography, or otherwise intended
                            to protect the health or well-being of minors.
                            <br />
                          </span>
                        </span>
                      </li>
                      <li
                        className="MsoNormal"
                        data-custom-classname="body_text"
                        style={{ lineHeight: "1.5", textAlign: "left" }}
                      >
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          <span style={{ fontSize: 14 }}>
                            Your Contributions do not include any offensive
                            comments that are connected to race, national
                            origin, gender, sexual preference, or physical
                            handicap.
                            <br />
                          </span>
                        </span>
                      </li>
                      <li
                        className="MsoNormal"
                        data-custom-classname="body_text"
                        style={{ lineHeight: "1.5", textAlign: "left" }}
                      >
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          <span style={{ fontSize: 14 }}>
                            Your Contributions do not otherwise violate, or link
                            to material that violates, any provision of these
                            Terms of Use, or any applicable law or regulation.
                          </span>
                        </span>
                      </li>
                    </ul>
                    <div
                      className="MsoNormal"
                      data-custom-classname="body_text"
                      style={{ lineHeight: "1.5", textAlign: "left" }}
                    >
                      <span
                        style={{
                          fontSize: 15,
                          lineHeight: "16.8667px",
                          color: "rgb(89, 89, 89)",
                        }}
                      >
                        Any use of the Site in violation of the foregoing
                        violates these Terms of Use and may result in, among
                        other things, termination or suspension of your rights
                        to use the Site.
                      </span>
                    </div>
                  </div>
                </bdo>
              </bdo>
            </bdo>
          </div>
          <div>
            <br />
          </div>
          <div>
            <br />
          </div>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <bdo className="block-container if" data-type="if">
              <bdo data-type="conditional-block">
                <bdo data-type="body">
                  <div
                    className="MsoNormal"
                    data-custom-classname="heading_1"
                    id="license"
                    style={{ lineHeight: "1.5" }}
                  >
                    <strong>
                      <span
                        style={{
                          lineHeight: "115%",
                          fontFamily: "Arial",
                          fontSize: 19,
                        }}
                      >
                        10. CONTRIBUTION LICENSE
                      </span>
                    </strong>
                  </div>
                </bdo>
              </bdo>
            </bdo>
          </div>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <br />
          </div>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <bdo className="block-container if" data-type="if">
              <bdo data-type="conditional-block">
                <bdo data-type="body">
                  <div
                    className="MsoNormal"
                    data-custom-classname="body_text"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span
                      style={{
                        fontSize: 15,
                        lineHeight: "115%",
                        fontFamily: "Arial",
                        color: "rgb(89, 89,89)",
                      }}
                    >
                      <bdo
                        className="block-container if"
                        data-type="if"
                        id="a088ddfb-d8c1-9e58-6f21-958c3f4f0709"
                      >
                        <bdo data-type="conditional-block">
                          <bdo
                            className="block-component"
                            data-record-question-key="user_post_content_option"
                            data-type="statement"
                          />
                        </bdo>
                      </bdo>
                    </span>
                  </div>
                  <div
                    className="MsoNormal"
                    data-custom-classname="body_text"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span
                      style={{
                        fontSize: 15,
                        lineHeight: "115%",
                        fontFamily: "Arial",
                        color: "rgb(89, 89,89)",
                      }}
                    >
                      You and the Site agree that we may access, store, process,
                      and use any information and personal data that you provide
                      following the terms of the Privacy Policy and your choices
                      (including settings).
                    </span>
                  </div>
                  <div style={{ textAlign: "left", lineHeight: 1 }}>
                    <br />
                  </div>
                  <div
                    className="MsoNormal"
                    data-custom-classname="body_text"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span
                      style={{
                        fontSize: 15,
                        lineHeight: "115%",
                        fontFamily: "Arial",
                        color: "rgb(89, 89,89)",
                      }}
                    >
                      By submitting suggestions or other feedback regarding the
                      Site, you agree that we can use and share &nbsp;such
                      feedback for any purpose without compensation to you.
                    </span>
                  </div>
                  <div style={{ textAlign: "left", lineHeight: 1 }}>
                    <br />
                  </div>
                  <div
                    className="MsoNormal"
                    data-custom-classname="body_text"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span
                      style={{
                        fontSize: 15,
                        lineHeight: "115%",
                        fontFamily: "Arial",
                        color: "rgb(89, 89, 89)",
                      }}
                    >
                      We do not assert any ownership over your Contributions.
                      You retain full ownership of all of your Contributions and
                      any intellectual property rights or other proprietary
                      rights associated with your Contributions. We are not
                      liable for any statements or representations in your
                      Contributions provided by you in any area on the Site. You
                      are solely responsible for your Contributions to the Site
                      and you expressly agree to exonerate us from any and all
                      responsibility and to refrain from any legal action
                      against us regarding your Contributions.
                    </span>
                  </div>
                  <div style={{ textAlign: "left", lineHeight: "1.5" }}>
                    <br />
                  </div>
                  <div style={{ textAlign: "left", lineHeight: "1.5" }}>
                    <br />
                  </div>
                </bdo>
              </bdo>
            </bdo>
          </div>

          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <bdo className="block-container if" data-type="if">
              <bdo className="statement-end-if-in-editor" data-type="close">
                <span style={{ fontSize: 15 }} />
              </bdo>
            </bdo>
            <bdo
              className="block-container if"
              data-type="if"
              id="a378120a-96b1-6fa3-279f-63d5b96341d3"
            >
              <bdo data-type="conditional-block">
                <bdo
                  className="block-component"
                  data-record-question-key="review_option"
                  data-type="statement"
                />
              </bdo>
              <bdo
                className="block-container if"
                data-type="if"
                id="c954892f-02b9-c743-d1e8-faf0d59a4b70"
              >
                <bdo data-type="conditional-block">
                  <bdo
                    className="block-component"
                    data-record-question-key="mobile_app_option"
                    data-type="statement"
                  ></bdo>
                </bdo>
                <bdo
                  className="block-container if"
                  data-type="if"
                  id="e9981d4e-3a93-85dd-654b-7ecdf4bfe7d2"
                >
                  <bdo data-type="conditional-block">
                    <bdo
                      className="block-component"
                      data-record-question-key="socialnetwork_link_option"
                      data-type="statement"
                    />
                    <bdo data-type="body">
                      <div
                        className="MsoNormal"
                        data-custom-classname="heading_1"
                        id="socialmedia"
                        style={{ lineHeight: "1.5" }}
                      >
                        <strong>
                          <span
                            style={{
                              lineHeight: "115%",
                              fontFamily: "Arial",
                              fontSize: 19,
                            }}
                          >
                            11. SOCIAL MEDIA
                          </span>
                        </strong>
                      </div>
                    </bdo>
                  </bdo>
                </bdo>
              </bdo>
            </bdo>
          </div>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <br />
          </div>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <bdo className="block-container if" data-type="if">
              <bdo data-type="conditional-block">
                <bdo data-type="body">
                  <div
                    className="MsoNormal"
                    data-custom-classname="body_text"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span
                      style={{
                        fontSize: 15,
                        lineHeight: "115%",
                        fontFamily: "Arial",
                        color: "rgb(89, 89, 89)",
                      }}
                    >
                      As part of the functionality of the Site, you may link
                      your account with online accounts you have with
                      third-party service providers (each such account, a
                      “Third-Party Account”) by either: (1) providing your
                      Third-Party Account login information through the Site; or
                      (2) allowing us to access your Third-Party Account, as is
                      permitted under the applicable terms and conditions that
                      govern your use of each Third-Party Account. You represent
                      and warrant that you are entitled to disclose your
                      Third-Party Account login information to us and/or grant
                      us access to your Third-Party Account, without breach by
                      you of any of the terms and conditions that govern your
                      use of the applicable Third-Party Account, and without
                      obligating us to pay any fees or making us subject to any
                      usage limitations imposed by the third-party service
                      provider of the Third-Party Account. By granting us access
                      to any Third-Party Accounts, you understand that (1) we
                      may access, make available, and store (if applicable) any
                      content that you have provided to and stored in your
                      Third-Party Account (the “Social Network Content”) so that
                      it is available on and through the Site via your account,
                      including without limitation any friend lists and (2) we
                      may submit to and receive from your Third-Party Account
                      additional information to the extent you are notified when
                      you link your account with the Third-Party Account.
                      Depending on the Third-Party Accounts you choose and
                      subject to the privacy settings that you have set in such
                      Third-Party Accounts, personally identifiable information
                      that you post to your Third-Party Accounts may be
                      available on and through your account on the Site. Please
                      note that if a Third-Party Account or associated service
                      becomes unavailable or our access to such Third-Party
                      Account is terminated by the third-party service provider,
                      then Social Network Content may no longer be available on
                      and through the Site. You will have the ability to disable
                      the connection between your account on the Site and your
                      Third-Party Accounts at any time. PLEASE NOTE THAT YOUR
                      RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS
                      ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED
                      SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE
                      PROVIDERS. We make no effort to review any Social Network
                      Content for any purpose, including but not limited to, for
                      accuracy, legality, or non-infringement, and we are not
                      responsible for any Social Network Content. You
                      acknowledge and agree that we may access your email
                      address book associated with a Third-Party Account and
                      your contacts list stored on your mobile device or tablet
                      computer solely for purposes of identifying and informing
                      you of those contacts who have also registered to use the
                      Site. You can deactivate the connection between the Site
                      and your Third-Party Account by contacting us using the
                      contact information below or through your account settings
                      (if applicable). We will attempt to delete any information
                      stored on our servers that was obtained through such
                      Third-Party Account, except the username and profile
                      picture that become associated with your account.
                    </span>
                  </div>
                </bdo>
              </bdo>
            </bdo>
          </div>
          <div style={{ textAlign: "left", lineHeight: "1.5" }}>
            <br />
          </div>
          <div style={{ textAlign: "left", lineHeight: "1.5" }}>
            <br />
          </div>
          <div style={{ textAlign: "left", lineHeight: "1.5" }}>
            <bdo className="block-container if" data-type="if">
              <bdo className="statement-end-if-in-editor" data-type="close">
                <span style={{ fontSize: 15 }} />
              </bdo>
            </bdo>
            <div
              className="MsoNormal"
              data-custom-classname="heading_1"
              id="submissions"
              style={{ lineHeight: "1.5" }}
            >
              <a name="_wfq2hvrw11j4" />
              <strong>
                <span
                  style={{
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    fontSize: 19,
                  }}
                >
                  12. SUBMISSIONS
                </span>
              </strong>
            </div>
          </div>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <br />
          </div>
          <div style={{ textAlign: "left", lineHeight: "1.5" }}>
            <div
              className="MsoNormal"
              data-custom-classname="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "rgb(89,89, 89)",
                }}
              >
                You acknowledge and agree that any questions, comments,
                suggestions, ideas, feedback, or other information regarding the
                Site ("Submissions") provided by you to us are non-confidential
                and shall become our sole property. We shall own exclusive
                rights, including all intellectual property rights, and shall be
                entitled to the unrestricted use and dissemination of these
                Submissions for any lawful purpose, commercial or otherwise,
                without acknowledgment or compensation to you. You hereby waive
                all moral rights to any such Submissions, and you hereby warrant
                that any such Submissions are original with you or that you have
                the right to submit such Submissions. You agree there shall be
                no recourse against us for any alleged or actual infringement or
                misappropriation of any proprietary right in your Submissions.
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div className="MsoNormal" style={{ lineHeight: 1 }}>
              <bdo
                className="block-container if"
                data-type="if"
                id="36ce5a69-4560-4947-dc72-46e53e2d562a"
              >
                <bdo data-type="conditional-block">
                  <bdo
                    className="block-component"
                    data-record-question-key="3rd_party_option"
                    data-type="statement"
                  ></bdo>
                  <bdo data-type="body">
                    <div
                      className="MsoNormal"
                      data-custom-classname="heading_1"
                      id="thirdparty"
                      style={{ textAlign: "left", lineHeight: "1.5" }}
                    >
                      <strong>
                        <span
                          style={{
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            fontSize: 19,
                          }}
                        >
                          13. THIRD-PARTY WEBSITES AND CONTENT
                        </span>
                      </strong>
                    </div>
                  </bdo>
                </bdo>
              </bdo>
            </div>
            <div className="MsoNormal" style={{ lineHeight: 1 }}>
              <br />
            </div>
            <div className="MsoNormal" style={{ lineHeight: 1 }}>
              <bdo className="block-container if" data-type="if">
                <bdo data-type="conditional-block">
                  <bdo data-type="body">
                    <div className="MsoNormal" data-custom-classname="body_text">
                      <span
                        style={{
                          fontSize: 15,
                          lineHeight: "115%",
                          fontFamily: "Arial",
                          color: "rgb(89, 89, 89)",
                        }}
                      >
                        The Site may contain (or you may be sent via the Site)
                        links to other websites ("Third-Party Websites") as well
                        as articles, photographs, text, graphics, pictures,
                        designs, music, sound, video, information, applications,
                        software, and other content or items belonging to or
                        originating from third parties ("Third-Party Content").
                        Such Third-Party Websites and Third-Party Content are
                        not investigated, monitored, or checked for accuracy,
                        appropriateness, or completeness by us, and we are not
                        responsible for any Third-Party Websites accessed
                        through the Site or any Third-Party Content posted on,
                        available through, or installed from the Site, including
                        the content, accuracy, offensiveness, opinions,
                        reliability, privacy practices, or other policies of or
                        contained in the Third-Party Websites or the Third-Party
                        Content. Inclusion of, linking to, or permitting the use
                        or installation of any Third-Party Websites or any
                        Third-Party Content does not imply approval or
                        endorsement thereof by us. If you decide to leave the
                        Site and access the Third-Party Websites or to use or
                        install any Third-Party Content, you do so at your own
                        risk, and you should be aware these Terms of Use no
                        longer govern. You should review the applicable terms
                        and policies, including privacy and data gathering
                        practices, of any website to which you navigate from the
                        Site or relating to any applications you use or install
                        from the Site. Any purchases you make through
                        Third-Party Websites will be through other websites and
                        from other companies, and we take no responsibility
                        whatsoever in relation to such purchases which are
                        exclusively between you and the applicable third party.
                        You agree and acknowledge that we do not endorse the
                        products or services offered on Third-Party Websites and
                        you shall hold us harmless from any harm caused by your
                        purchase of such products or services. Additionally, you
                        shall hold us harmless from any losses sustained by you
                        or harm caused to you relating to or resulting in any
                        way from any Third-Party Content or any contact with
                        Third-Party Websites.
                      </span>
                    </div>
                  </bdo>
                </bdo>
              </bdo>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div className="MsoNormal" style={{ lineHeight: 1 }}>
              <bdo className="block-container if" data-type="if">
                <bdo className="statement-end-if-in-editor" data-type="close">
                  <span style={{ fontSize: 15 }} />
                </bdo>
              </bdo>
              <bdo
                className="block-container if"
                data-type="if"
                id="14038561-dad7-be9d-370f-f8aa487b2570"
              >
                <bdo data-type="conditional-block">
                  <bdo
                    className="block-component"
                    data-record-question-key="advertiser_option"
                    data-type="statement"
                  >
                    <bdo className="block-component" />
                  </bdo>
                </bdo>
              </bdo>
            </div>
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: "115%" }}
          >
            <div
              className="MsoNormal"
              data-custom-classname="heading_1"
              id="usrights"
              style={{ textAlign: "left", lineHeight: "1.5" }}
            >
              <strong>
                <span
                  style={{
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    fontSize: 19,
                  }}
                >
                  14. U.S. GOVERNMENT RIGHTS
                </span>
              </strong>
            </div>
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: 1 }}
          >
            <br />
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: "justify", lineHeight: "115%" }}
          >
            <div
              className="MsoNormal"
              data-custom-classname="body_text"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "rgb(89, 89, 89)",
                  backgroundImage: "initial",
                  backgroundPosition: "initial",
                  backgroundSize: "initial",
                  backgroundRepeat: "initial",
                  backgroundAttachment: "initial",
                  backgroundOrigin: "initial",
                  backgroundClip: "initial",
                }}
              >
                Our services are “commercial items” as defined in Federal
                Acquisition Regulation (“FAR”) 2.101. If our services are
                acquired by or on behalf of any agency not within the Department
                of Defense (“DOD”), our services are subject to the terms of
                these Terms of Use in accordance with FAR 12.212 (for computer
                software) and FAR 12.211 (for technical data). If our services
                are acquired by or on behalf of any agency within the Department
                of Defense, our services are subject to the terms of these Terms
                of Use in accordance with Defense Federal Acquisition Regulation
                (“DFARS”) 227.7202
              </span>
              <span style={{ fontSize: 15 }}>
                <span
                  style={{
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    color: "rgb(89, 89, 89)",
                    backgroundImage: "initial",
                    backgroundPosition: "initial",
                    backgroundSize: "initial",
                    backgroundRepeat: "initial",
                    backgroundAttachment: "initial",
                    backgroundOrigin: "initial",
                    backgroundClip: "initial",
                  }}
                >
                  ‑3. In addition, DFARS 252.227‑
                </span>
              </span>
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "rgb(89,89, 89)",
                  backgroundImage: "initial",
                  backgroundPosition: "initial",
                  backgroundSize: "initial",
                  backgroundRepeat: "initial",
                  backgroundAttachment: "initial",
                  backgroundOrigin: "initial",
                  backgroundClip: "initial",
                }}
              >
                7015 applies to technical data acquired by the DOD. This U.S.
                Government Rights clause is in lieu of, and supersedes, any
                other FAR, DFARS, or other clause or provision that addresses
                government rights in computer software or technical data under
                these Terms of Use.
              </span>
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <br />
            </div>
            <div
              className="MsoNormal"
              style={{ lineHeight: "1.5", textAlign: "left" }}
            >
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  color: "#595959",
                  msoThemecolor: "text1",
                  msoThemetint: 166,
                }}
              >
                <bdo
                  className="block-container if"
                  data-type="if"
                  id="14038561-dad7-be9d-370f-f8aa487b2570"
                >
                  <bdo className="statement-end-if-in-editor" data-type="close">
                    <span style={{ fontSize: 15 }} />
                  </bdo>
                </bdo>
              </span>
            </div>
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="heading_1"
            id="sitemanage"
            style={{ lineHeight: "1.5" }}
          >
            <a name="_wj13r09u8u3u" />
            <strong>
              <span
                style={{
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  fontSize: 19,
                }}
              >
                15. SITE MANAGEMENT
              </span>
            </strong>
          </div>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <br />
          </div>
          <div style={{ textAlign: "left", lineHeight: "1.5" }}>
            <div
              className="MsoNormal"
              data-custom-classname="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "rgb(89,89, 89)",
                }}
              >
                We reserve the right, but not the obligation, to: (1) monitor
                the Site for violations of these Terms of Use; (2) take
                appropriate legal action against anyone who, in our sole
                discretion, violates the law or these Terms of Use, including
                without limitation, reporting such user to law enforcement
                authorities; (3) in our sole discretion and without limitation,
                refuse, restrict access to, limit the availability of, or
                disable (to the extent technologically feasible) any of your
                Contributions or any portion thereof; (4) in our sole discretion
                and without limitation, notice, or liability, to remove from the
                Site or otherwise disable all files and content that are
                excessive in size or are in any way burdensome to our systems;
                and (5) otherwise manage the Site in a manner designed to
                protect our rights and property and to facilitate the proper
                functioning of the Site.
              </span>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <a name="_jugvcvcw0oj9" />
            </div>
          </div>
          <div style={{ textAlign: "left", lineHeight: "1.5" }}>
            <br />
          </div>
          <div style={{ textAlign: "left", lineHeight: "1.5" }}>
            <br />
          </div>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <bdo className="block-container if" data-type="if">
              <bdo data-type="conditional-block">
                <bdo
                  className="block-component"
                  data-record-question-key="privacy_policy_option"
                  data-type="statement"
                />
                <bdo data-type="body">
                  <div
                    className="MsoNormal"
                    data-custom-classname="heading_1"
                    id="privacypolicy1"
                    style={{ lineHeight: "1.5" }}
                  >
                    <strong>
                      <span
                        style={{
                          lineHeight: "115%",
                          fontFamily: "Arial",
                          fontSize: 19,
                        }}
                      >
                        16. PRIVACY POLICY
                      </span>
                    </strong>
                  </div>
                </bdo>
              </bdo>
            </bdo>
          </div>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <br />
          </div>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <bdo className="block-container if" data-type="if">
              <bdo data-type="conditional-block">
                <bdo data-type="body">
                  <div
                    className="MsoNormal"
                    data-custom-classname="body_text"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span
                      style={{
                        fontSize: 15,
                        lineHeight: "115%",
                        fontFamily: "Arial",
                        color: "rgb(89, 89, 89)",
                      }}
                    >
                      We care about data privacy and security. Please review our
                      Privacy Policy:{" "}
                      <strong>
                        <bdo
                          className="block-container
                            question question-in-editor"
                          data-id="d10c7fd7-0685-12ac-c717-cbc45ff916d1"
                          data-type="question"
                        >
                          <a
                            href="http://wellspringattribution.com/privacy-policy"
                            target="_blank"
                            data-custom-classname="link"
                          >
                            http://wellspringattribution.com/privacy-policy
                          </a>
                        </bdo>
                      </strong>
                      . By using the Site, you agree to be bound by our Privacy
                      Policy, which is incorporated into these Terms of Use.
                      Please be advised the Site is hosted in{" "}
                      <bdo className="block-component" />
                      the <bdo className="question">United States</bdo>
                      <bdo className="block-component" />. If you access the
                      Site from any other region of the world with laws or other
                      requirements governing personal data collection, use, or
                      disclosure that differ from applicable laws in{" "}
                      <span
                        style={{
                          fontSize: 15,
                          lineHeight: "115%",
                          fontFamily: "Arial",
                          color: "rgb(89, 89, 89)",
                        }}
                      >
                        <bdo className="block-component" />
                        the
                        <bdo className="question">United States</bdo>
                        <bdo className="block-component" />
                      </span>
                      , then through your continued use of the Site,
                    </span>
                    <span
                      style={{
                        fontSize: "11.0pt",
                        lineHeight: "115%",
                        fontFamily: "Arial",
                        color: "#595959",
                        msoThemecolor: "text1",
                        msoThemetint: 166,
                      }}
                    >
                      &nbsp;
                    </span>
                    <span
                      style={{
                        fontSize: 15,
                        lineHeight: "115%",
                        fontFamily: "Arial",
                        color: "rgb(89, 89, 89)",
                      }}
                    >
                      you are transferring your data to{" "}
                      <span
                        style={{
                          fontSize: 15,
                          lineHeight: "115%",
                          fontFamily: "Arial",
                          color: "rgb(89, 89, 89)",
                        }}
                      >
                        <bdo className="block-component" />
                        the <bdo className="question">United States</bdo>
                        <bdo className="block-component" />
                      </span>
                      , and you agree to have your data transferred to and
                      processed in{" "}
                      <span
                        style={{
                          fontSize: 15,
                          lineHeight: "115%",
                          fontFamily: "Arial",
                          color: "rgb(89, 89, 89)",
                        }}
                      >
                        <bdo className="block-component" />
                        the
                        <bdo className="question">United States</bdo>
                        <bdo className="block-component" />
                      </span>
                      . <bdo className="block-component" />
                      <bdo
                        className="block-container if"
                        data-type="if"
                        id="547bb7bb-ecf2-84b9-1cbb-a861dc3e14e7"
                      >
                        <bdo data-type="conditional-block">
                          <bdo
                            className="block-component"
                            data-record-question-key="user_u13_option"
                            data-type="statement"
                          >
                            <span
                              style={{
                                fontSize: 15,
                                lineHeight: "115%",
                                fontFamily: "Arial",
                                color: "rgb(89, 89,89)",
                              }}
                            >
                              <bdo className="statement-end-if-in-editor" />
                            </span>
                          </bdo>
                        </bdo>
                      </bdo>
                    </span>
                  </div>
                </bdo>
              </bdo>
            </bdo>
          </div>
          <div style={{ textAlign: "left", lineHeight: "1.5" }}>
            <br />
          </div>
          <div style={{ textAlign: "left", lineHeight: "1.5" }}>
            <br />
          </div>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <bdo className="block-container if" data-type="if">
              <bdo className="statement-end-if-in-editor" data-type="close">
                <span style={{ fontSize: 15 }} />
              </bdo>
              <bdo
                className="block-container if"
                data-type="if"
                id="7371467a-f2b5-2aff-cd0f-3379e970551e"
              >
                <bdo data-type="conditional-block">
                  <bdo
                    className="block-component"
                    data-record-question-key="privacy_policy_followup"
                    data-type="statement"
                    style={{ fontSize: "14.6667px" }}
                  >
                    <bdo className="block-component" />
                  </bdo>
                </bdo>
                <bdo
                  className="block-container if"
                  data-type="if"
                  id="923fc4bc-b171-82ba-b6eb-0a13c12d1b6b"
                >
                  <bdo data-type="conditional-block">
                    <bdo
                      className="block-component"
                      data-record-question-key="copyright_agent_option"
                      data-type="statement"
                    />
                    <bdo
                      className="statement-end-if-in-editor"
                      data-type="close"
                    >
                      <span style={{ fontSize: 15 }}>
                        <bdo className="block-component" />
                      </span>
                    </bdo>
                  </bdo>
                </bdo>
                <bdo
                  className="block-container if"
                  data-type="if"
                  id="95e88984-ac54-be9d-35de-f10fd010af14"
                >
                  <bdo data-type="conditional-block">
                    <bdo
                      className="block-component"
                      data-record-question-key="no_agent_clause_option"
                      data-type="statement"
                    />
                  </bdo>
                  <bdo className="block-component" />
                </bdo>
              </bdo>
            </bdo>
          </div>
          <div style={{ textAlign: "left", lineHeight: "1.5" }}>
            <div
              className="MsoNormal"
              data-custom-classname="heading_1"
              id="terms"
              style={{ lineHeight: "1.5" }}
            >
              <a name="_k3mndam4w6w1" />
              <strong>
                <span
                  style={{
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    fontSize: 19,
                  }}
                >
                  17. TERM AND TERMINATION
                </span>
              </strong>
            </div>
          </div>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <br />
          </div>
          <div style={{ textAlign: "left", lineHeight: "1.5" }}>
            <div
              className="MsoNormal"
              data-custom-classname="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "rgb(89,89, 89)",
                }}
              >
                These Terms of Use shall remain in full force and effect while
                you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE
                TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION
                AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE
                SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON
                FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION
                FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT
                CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR
                REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE
                SITE OR DELETE{" "}
                <bdo
                  className="block-container if"
                  data-type="if"
                  id="a6e121c2-36b4-5066-bf9f-a0a33512e768"
                >
                  <bdo data-type="conditional-block">
                    <bdo
                      className="block-component"
                      data-record-question-key="user_account_option"
                      data-type="statement"
                    />
                  </bdo>
                </bdo>
                <bdo
                  className="block-container if"
                  data-type="if"
                  id="a6e121c2-36b4-5066-bf9f-a0a33512e768"
                >
                  <bdo data-type="conditional-block">
                    <bdo data-type="body">YOUR</bdo>
                  </bdo>
                </bdo>
              </span>
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#595959",
                  msoThemecolor: "text1",
                  msoThemetint: 166,
                }}
              >
                <bdo
                  className="block-container if"
                  data-type="if"
                  id="a6e121c2-36b4-5066-bf9f-a0a33512e768"
                >
                  <bdo data-type="conditional-block">
                    <bdo data-type="body">&nbsp;</bdo>
                  </bdo>
                </bdo>
              </span>
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "rgb(89, 89, 89)",
                }}
              >
                <bdo
                  className="block-container if"
                  data-type="if"
                  id="a6e121c2-36b4-5066-bf9f-a0a33512e768"
                >
                  <bdo data-type="conditional-block">
                    <bdo data-type="body">ACCOUNT AND&nbsp;</bdo>
                  </bdo>
                </bdo>
                <bdo
                  className="block-container if"
                  data-type="if"
                  id="a6e121c2-36b4-5066-bf9f-a0a33512e768"
                >
                  <bdo
                    className="statement-end-if-in-editor"
                    data-type="close"
                  />
                </bdo>
                ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT
                WARNING, IN OUR SOLE DISCRETION.
              </span>
            </div>
          </div>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <br />
          </div>
          <div style={{ textAlign: "left", lineHeight: "1.5" }}>
            <div
              className="MsoNormal"
              data-custom-classname="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span style={{ fontSize: 15 }}>
                <span
                  style={{
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    color: "rgb(89, 89, 89)",
                  }}
                >
                  If we terminate or suspend your account for any reason, you
                  are prohibited from registering and creating a new account
                  under your name, a fake or borrowed name, or the name of any
                  third party, even if you may be acting on behalf of the third
                  party. In addition to terminating or suspending your account,
                  we reserve the right to take appropriate legal action,
                  including without limitation pursuing civil, criminal, and
                  injunctive redress.
                </span>
              </span>
            </div>
          </div>
          <div style={{ textAlign: "left", lineHeight: "1.5" }}>
            <br />
          </div>
          <div style={{ textAlign: "left", lineHeight: "1.5" }}>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-classname="heading_1"
              id="modifications"
              style={{ lineHeight: "1.5" }}
            >
              <a name="_e2dep1hfgltt" />
              <strong>
                <span style={{ lineHeight: "115%", fontFamily: "Arial" }}>
                  <span style={{ fontSize: 19 }}>
                    18. MODIFICATIONS AND INTERRUPTIONS
                  </span>
                </span>
              </strong>
            </div>
          </div>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <br />
          </div>
          <div style={{ textAlign: "left", lineHeight: "1.5" }}>
            <div
              className="MsoNormal"
              data-custom-classname="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "rgb(89,89, 89)",
                }}
              >
                We reserve the right to change, modify, or remove the contents
                of the Site at any time or for any reason at our sole discretion
                without notice. However, we have no obligation to update any
                information on our Site. We also reserve the right to modify or
                discontinue all or part of the Site without notice at any time.
                We will not be liable to you or any third party for any
                modification, price change, suspension, or discontinuance of the
                Site.
              </span>
            </div>
          </div>
          <div style={{ textAlign: "left", lineHeight: 1 }}>
            <br />
          </div>
          <div style={{ textAlign: "left", lineHeight: "1.5" }}>
            <div
              className="MsoNormal"
              data-custom-classname="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "rgb(89,89, 89)",
                }}
              >
                We cannot guarantee the Site will be available at all times. We
                may experience hardware, software, or other problems or need to
                perform maintenance related to the Site, resulting in
                interruptions, delays, or errors. We reserve the right to
                change, revise, update, suspend, discontinue, or otherwise
                modify the Site at any time or for any reason without notice to
                you. You agree that we have no liability whatsoever for any
                loss, damage, or inconvenience caused by your inability to
                access or use the Site during any downtime or discontinuance of
                the Site. Nothing in these Terms of Use will be construed to
                obligate us to maintain and support the Site or to supply any
                corrections, updates, or releases in connection therewith.
              </span>
            </div>
          </div>
          <div style={{ textAlign: "left", lineHeight: "1.5" }}>
            <br />
          </div>
          <div style={{ textAlign: "left", lineHeight: "1.5" }}>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-classname="heading_1"
              id="law"
              style={{ lineHeight: "1.5" }}
            >
              <a name="_p6vbf8atcwhs" />
              <strong>
                <span style={{ lineHeight: "115%", fontFamily: "Arial" }}>
                  <span style={{ fontSize: 19 }}>19. GOVERNING LAW</span>
                </span>
              </strong>
            </div>
            <div className="MsoNormal" style={{ lineHeight: 1 }}>
              <br />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#595959",
                  msoThemecolor: "text1",
                  msoThemetint: 166,
                }}
              >
                <bdo className="block-component" />
              </span>
            </div>
            <div
              className="MsoNormal"
              data-custom-classname="body_text"
              style={{ lineHeight: "1.5" }}
            >
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "rgb(89,89, 89)",
                }}
              >
                These Terms of Use and your use of the Site are governed by and
                construed in accordance with the laws of{" "}
                <bdo
                  className="block-container if"
                  data-type="if"
                  id="b86653c1-52f0-c88c-a218-e300b912dd6b"
                >
                  <bdo data-type="conditional-block">
                    <bdo
                      className="block-component"
                      data-record-question-key="governing_law"
                      data-type="statement"
                    ></bdo>
                  </bdo>
                </bdo>
                <bdo
                  className="block-container if"
                  data-type="if"
                  id="b86653c1-52f0-c88c-a218-e300b912dd6b"
                >
                  <bdo data-type="conditional-block">
                    <bdo data-type="body">the State</bdo>
                  </bdo>
                </bdo>
                <bdo
                  className="block-container
                    if"
                  data-type="if"
                  id="b86653c1-52f0-c88c-a218-e300b912dd6b"
                >
                  <bdo data-type="conditional-block">
                    <bdo data-type="body">&nbsp;of&nbsp;</bdo>
                  </bdo>
                </bdo>
                <bdo
                  className="block-container if"
                  data-type="if"
                  id="b86653c1-52f0-c88c-a218-e300b912dd6b"
                >
                  <bdo data-type="conditional-block">
                    <bdo data-type="body">
                      <bdo
                        className="block-container question
                          question-in-editor"
                        data-id="b61250bd-6b61-32ea-a9e7-4a02690297c3"
                        data-type="question"
                      >
                        California
                      </bdo>
                    </bdo>
                  </bdo>
                </bdo>
                <bdo
                  className="block-container if"
                  data-type="if"
                  id="b86653c1-52f0-c88c-a218-e300b912dd6b"
                >
                  <bdo
                    className="statement-end-if-in-editor"
                    data-type="close"
                  />
                </bdo>
              </span>
              <span
                style={{
                  fontSize: "11.0pt",
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "#595959",
                  msoThemecolor: "text1",
                  msoThemetint: 166,
                }}
              >
                &nbsp;
              </span>
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "rgb(89, 89, 89)",
                }}
              >
                applicable to agreements made and to be entirely performed
                within{" "}
                <span
                  style={{
                    fontSize: 15,
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    color: "rgb(89, 89, 89)",
                  }}
                >
                  <bdo
                    className="block-container if"
                    data-type="if"
                    id="b86653c1-52f0-c88c-a218-e300b912dd6b"
                  >
                    <bdo data-type="conditional-block">
                      <bdo
                        className="block-component"
                        data-record-question-key="governing_law"
                        data-type="statement"
                      ></bdo>
                    </bdo>
                  </bdo>
                  <bdo
                    className="block-container if"
                    data-type="if"
                    id="b86653c1-52f0-c88c-a218-e300b912dd6b"
                    style={{ fontSize: "14.6667px" }}
                  >
                    <bdo data-type="conditional-block">
                      <bdo data-type="body">the State of</bdo>
                    </bdo>
                  </bdo>
                  <bdo
                    className="block-container if"
                    data-type="if"
                    id="b86653c1-52f0-c88c-a218-e300b912dd6b"
                    style={{ fontSize: "14.6667px" }}
                  >
                    <bdo data-type="conditional-block">
                      <bdo data-type="body">&nbsp;</bdo>
                    </bdo>
                  </bdo>
                  <bdo
                    className="block-container if"
                    data-type="if"
                    id="b86653c1-52f0-c88c-a218-e300b912dd6b"
                    style={{ fontSize: "14.6667px" }}
                  >
                    <bdo data-type="conditional-block">
                      <bdo data-type="body">
                        <bdo
                          className="block-container
                            question question-in-editor"
                          data-id="b61250bd-6b61-32ea-a9e7-4a02690297c3"
                          data-type="question"
                        >
                          California
                        </bdo>
                      </bdo>
                    </bdo>
                  </bdo>
                  <bdo
                    className="block-container if"
                    data-type="if"
                    id="b86653c1-52f0-c88c-a218-e300b912dd6b"
                    style={{ fontSize: "14.6667px" }}
                  >
                    <bdo
                      className="statement-end-if-in-editor"
                      data-type="close"
                    />
                  </bdo>
                  , without regard to its conflict of law principles.
                </span>
                <bdo className="block-component" />
              </span>
            </div>
          </div>
          <div style={{ textAlign: "left", lineHeight: "1.5" }}>
            <br />
          </div>
          <div style={{ textAlign: "left", lineHeight: "1.5" }}>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-classname="heading_1"
              id="disputes"
              style={{ lineHeight: "1.5" }}
            >
              <a name="_v5i5tjw62cyw" />
              <strong>
                <span
                  style={{
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    fontSize: 19,
                  }}
                >
                  20. DISPUTE RESOLUTION
                </span>
              </strong>
            </div>
            <div className="MsoNormal" style={{ lineHeight: 1 }}>
              <br />
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <bdo className="block-container if" data-type="if">
                <bdo data-type="conditional-block">
                  <bdo className="block-component" />
                  <bdo className="block-component" />
                  <bdo data-type="body">
                    <div
                      className="MsoNormal"
                      data-custom-classname="body_text"
                      style={{ lineHeight: "1.5" }}
                    >
                      <span
                        style={{
                          fontSize: 15,
                          lineHeight: "115%",
                          fontFamily: "Arial",
                          color: "rgb(89, 89,89)",
                        }}
                      >
                        Any legal action of whatever nature brought by either
                        you or us (collectively, the “Parties” and individually,
                        a “Party”) shall be commenced or prosecuted in the
                        <bdo className="block-component" /> state and federal
                        courts
                        <bdo className="statement-end-if-in-editor" />
                        located in
                        <bdo className="block-component" />
                        <bdo
                          className="block-container question
                            question-in-editor"
                          data-id="40eea829-de8e-e8ed-6f5d-f33e5a67f160"
                          data-type="question"
                        >
                          Los Angeles
                        </bdo>
                        ,
                        <span
                          style={{
                            fontSize: 15,
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            color: "rgb(89, 89, 89)",
                          }}
                        >
                          <bdo className="statement-end-if-in-editor" />
                        </span>
                        <bdo className="block-component" />
                        <bdo
                          className="block-container question
                            question-in-editor"
                          data-id="bfee4bc3-e41e-d0fb-b2a6-eeba63bf170f"
                          data-type="question"
                        >
                          California
                        </bdo>
                        <span
                          style={{
                            fontSize: 15,
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            color: "rgb(89, 89, 89)",
                          }}
                        >
                          <bdo className="statement-end-if-in-editor" />
                        </span>
                        , and the Parties hereby consent to, and waive all
                        defenses of lack of personal jurisdiction and forum non
                        conveniens with respect to venue and jurisdiction in
                        such
                        <span
                          style={{
                            fontSize: 15,
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            color: "rgb(89, 89, 89)",
                          }}
                        >
                          <bdo className="block-component" /> state and federal
                          courts
                          <bdo className="statement-end-if-in-editor" />
                        </span>
                        . Application of the United Nations Convention on
                        Contracts for the International Sale of Goods and the
                        Uniform Computer Information Transaction Act (UCITA) are
                        excluded from these Terms
                      </span>
                      <span
                        style={{
                          fontSize: "11.0pt",
                          lineHeight: "115%",
                          fontFamily: "Arial",
                          color: "#595959",
                          msoThemecolor: "text1",
                          msoThemetint: 166,
                        }}
                      >
                        &nbsp;
                      </span>
                      <span
                        style={{
                          fontSize: 15,
                          lineHeight: "115%",
                          fontFamily: "Arial",
                          color: "rgb(89, 89, 89)",
                        }}
                      >
                        of Use.{" "}
                        <bdo
                          className="block-container if"
                          data-type="if"
                          id="5f4c4c12-ace4-b62d-57f7-b56b2a1118e7"
                        >
                          <bdo data-type="conditional-block">
                            <bdo
                              className="block-component"
                              data-record-question-key="ligitation_limit_years_option"
                              data-type="statement"
                            />
                          </bdo>
                        </bdo>
                        <bdo
                          className="block-container if"
                          data-type="if"
                          id="5f4c4c12-ace4-b62d-57f7-b56b2a1118e7"
                        >
                          <bdo data-type="conditional-block">
                            <bdo data-type="body">
                              In no event shall any claim, action, or proceeding
                              brought by either Party related in any way to the
                              Site be
                            </bdo>
                          </bdo>
                        </bdo>
                      </span>
                      <span
                        style={{
                          fontSize: "11.0pt",
                          lineHeight: "115%",
                          fontFamily: "Arial",
                          color: "#595959",
                          msoThemecolor: "text1",
                          msoThemetint: 166,
                        }}
                      >
                        <bdo
                          className="block-container if"
                          data-type="if"
                          id="5f4c4c12-ace4-b62d-57f7-b56b2a1118e7"
                        >
                          <bdo data-type="conditional-block">
                            <bdo data-type="body">&nbsp;</bdo>
                          </bdo>
                        </bdo>
                      </span>
                      <span
                        style={{
                          fontSize: 15,
                          lineHeight: "115%",
                          fontFamily: "Arial",
                          color: "rgb(89, 89, 89)",
                        }}
                      >
                        <bdo
                          className="block-container if"
                          data-type="if"
                          id="5f4c4c12-ace4-b62d-57f7-b56b2a1118e7"
                        >
                          <bdo data-type="conditional-block">
                            <bdo data-type="body">
                              commenced more than
                              <bdo
                                className="block-container question
                                  question-in-editor"
                                data-id="0cfbb38b-c99c-93e8-65cc-6964601e7511"
                                data-type="question"
                              >
                                one (1)
                              </bdo>{" "}
                              years after
                            </bdo>
                          </bdo>
                        </bdo>
                        <bdo
                          className="block-container if"
                          data-type="if"
                          id="5f4c4c12-ace4-b62d-57f7-b56b2a1118e7"
                        >
                          <bdo data-type="conditional-block">
                            <bdo data-type="body">&nbsp;</bdo>
                          </bdo>
                        </bdo>
                        <bdo
                          className="block-container if"
                          data-type="if"
                          id="5f4c4c12-ace4-b62d-57f7-b56b2a1118e7"
                        >
                          <bdo data-type="conditional-block">
                            <bdo data-type="body">
                              the cause of action arose.
                            </bdo>
                          </bdo>
                        </bdo>
                        <bdo
                          className="block-container if"
                          data-type="if"
                          id="5f4c4c12-ace4-b62d-57f7-b56b2a1118e7"
                        >
                          <bdo
                            className="statement-end-if-in-editor"
                            data-type="close"
                          >
                            <bdo className="block-component" />
                          </bdo>
                        </bdo>
                      </span>
                    </div>
                  </bdo>
                </bdo>
              </bdo>
            </div>
            <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
              <bdo className="block-container if" data-type="if">
                <bdo data-type="conditional-block">
                  <bdo data-type="body">
                    <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
                      <bdo className="else-block" />
                    </div>
                    <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
                      <br />
                    </div>
                    <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
                      <br />
                    </div>
                    <div
                      className="MsoNormal"
                      data-custom-classname="heading_1"
                      id="corrections"
                      style={{ lineHeight: "1.5" }}
                    >
                      <strong>
                        <span style={{ fontSize: 19 }}>21. CORRECTIONS</span>
                      </strong>
                    </div>
                    <div className="MsoNormal" style={{ lineHeight: 1 }}>
                      <br />
                    </div>
                    <div
                      className="MsoNormal"
                      data-custom-classname="body_text"
                      style={{ lineHeight: "1.5" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        There may be information on the Site that contains
                        typographical errors, inaccuracies, or omissions,
                        including descriptions, pricing, availability, and
                        various other information. We reserve the right to
                        correct any errors, inaccuracies, or omissions and to
                        change or update the information on the Site at any
                        time, without prior notice.
                      </span>
                    </div>
                    <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
                      <br />
                    </div>
                    <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
                      <br />
                    </div>
                    <div
                      className="MsoNormal"
                      data-custom-classname="heading_1"
                      id="disclaimer"
                      style={{ lineHeight: "1.5" }}
                    >
                      <strong>
                        <span style={{ fontSize: 19 }}>22. DISCLAIMER</span>
                      </strong>
                    </div>
                    <div className="MsoNormal" style={{ lineHeight: 1 }}>
                      <br />
                    </div>
                    <div
                      className="MsoNormal"
                      data-custom-classname="body_text"
                      style={{ lineHeight: "1.5" }}
                    >
                      <span style={{ fontSize: 15 }}>
                        THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS.
                        YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES
                        WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT
                        PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR
                        IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE
                        THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
                        WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                        PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR
                        REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF
                        THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED
                        TO THE SITE AND WE WILL ASSUME NO LIABILITY OR
                        RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR
                        INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL
                        INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
                        RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3)
                        ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS
                        AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL
                        INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR
                        CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY
                        BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE
                        TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY,
                        AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND
                        MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED
                        AS A RESULT OF THE USE OF ANY CONTENT POSTED,
                        TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE.
                        WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
                        RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR
                        OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY
                        HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE
                        APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING,
                        AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE
                        RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU
                        AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
                        AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY
                        MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST
                        JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
                      </span>
                    </div>
                  </bdo>
                </bdo>
              </bdo>
            </div>
          </div>
          <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="heading_1"
            id="liability"
            style={{ lineHeight: "1.5" }}
          >
            <strong>
              <span style={{ fontSize: 19 }}>23. LIMITATIONS OF LIABILITY</span>
            </strong>
          </div>
          <div className="MsoNormal" style={{ lineHeight: 1 }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="body_text"
            style={{ lineHeight: "1.5" }}
          >
            <span style={{ fontSize: 15 }}>
              IN{" "}
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "rgb(89, 89, 89)",
                }}
              >
                NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
                LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
                CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
                DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
                OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE
                BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.{" "}
                <span
                  style={{
                    fontSize: 15,
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    color: "rgb(89, 89,89)",
                  }}
                >
                  <bdo
                    className="block-container if"
                    data-type="if"
                    id="3c3071ce-c603-4812-b8ca-ac40b91b9943"
                  >
                    <bdo data-type="conditional-block">
                      <bdo
                        className="block-component"
                        data-record-question-key="limitations_liability_option"
                        data-type="statement"
                      ></bdo>
                    </bdo>
                  </bdo>
                  <bdo
                    className="block-container if"
                    data-type="if"
                    id="3c3071ce-c603-4812-b8ca-ac40b91b9943"
                  >
                    <bdo data-type="conditional-block">
                      <bdo data-type="body">NOTWITHSTANDING</bdo>
                    </bdo>
                  </bdo>
                </span>
                <span
                  style={{
                    fontSize: "11.0pt",
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    color: "#595959",
                    msoThemecolor: "text1",
                    msoThemetint: 166,
                  }}
                >
                  <bdo
                    className="block-container if"
                    data-type="if"
                    id="3c3071ce-c603-4812-b8ca-ac40b91b9943"
                  >
                    <bdo data-type="conditional-block">
                      <bdo data-type="body">&nbsp;</bdo>
                    </bdo>
                  </bdo>
                </span>
                <span
                  style={{
                    fontSize: 15,
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    color: "rgb(89, 89,89)",
                  }}
                >
                  <bdo
                    className="block-container if"
                    data-type="if"
                    id="3c3071ce-c603-4812-b8ca-ac40b91b9943"
                  >
                    <bdo data-type="conditional-block">
                      <bdo data-type="body">
                        ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY
                        TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE
                        FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO{" "}
                        <span
                          style={{
                            fontSize: 15,
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            color: "rgb(89,89, 89)",
                          }}
                        >
                          <bdo
                            className="block-container if"
                            data-type="if"
                            id="3c3071ce-c603-4812-b8ca-ac40b91b9943"
                          >
                            <bdo data-type="conditional-block">
                              <bdo data-type="body">
                                <bdo
                                  className="block-container
                                              if"
                                  data-type="if"
                                  id="73189d93-ed3a-d597-3efc-15956fa8e04e"
                                >
                                  <bdo data-type="conditional-block">
                                    <bdo
                                      className="block-component"
                                      data-record-question-key="limitations_liability_option"
                                      data-type="statement"
                                    />
                                  </bdo>
                                </bdo>
                              </bdo>
                            </bdo>
                          </bdo>
                        </span>
                        <bdo data-type="if">
                          <bdo data-type="conditional-block">
                            <bdo data-type="body">
                              <bdo data-type="if">
                                <bdo data-type="conditional-block">
                                  <bdo data-type="body">THE AMOUNT PAID,</bdo>
                                </bdo>
                              </bdo>
                            </bdo>
                          </bdo>
                        </bdo>
                        <bdo data-type="if">
                          &nbsp;
                          <bdo data-type="conditional-block">
                            <bdo data-type="body">
                              <bdo data-type="if">
                                <bdo data-type="conditional-block">
                                  <bdo data-type="body">
                                    IF ANY, BY YOU TO US
                                    <span
                                      style={{
                                        fontSize: 15,
                                        lineHeight: "115%",
                                        fontFamily: "Arial",
                                        color: "rgb(89, 89,89)",
                                      }}
                                    >
                                      <bdo
                                        className="block-container
                                                    if"
                                        data-type="if"
                                        id="3c3071ce-c603-4812-b8ca-ac40b91b9943"
                                      >
                                        <bdo data-type="conditional-block">
                                          <bdo data-type="body">
                                            <bdo
                                              className="block-container
                                                          if"
                                              data-type="if"
                                              id="73189d93-ed3a-d597-3efc-15956fa8e04e"
                                            >
                                              <bdo data-type="conditional-block">
                                                <bdo data-type="body">
                                                  <bdo
                                                    className="block-container
                                                                if"
                                                    data-type="if"
                                                    id="19e172cb-4ccf-1904-7c06-4251800ba748"
                                                  >
                                                    <bdo data-type="conditional-block">
                                                      <bdo
                                                        className="block-component"
                                                        data-record-question-key="limilation_liability_time_option"
                                                        data-type="statement"
                                                      />
                                                    </bdo>
                                                  </bdo>
                                                </bdo>
                                              </bdo>
                                            </bdo>
                                          </bdo>
                                        </bdo>
                                      </bdo>
                                    </span>
                                    DURING THE{" "}
                                    <bdo className="question">SIX (6)</bdo>
                                    MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION
                                    ARISING
                                    <span
                                      style={{
                                        fontSize: 15,
                                        lineHeight: "115%",
                                        fontFamily: "Arial",
                                        color: "rgb(89, 89,89)",
                                      }}
                                    >
                                      <bdo
                                        className="block-container
                                                    if"
                                        data-type="if"
                                        id="3c3071ce-c603-4812-b8ca-ac40b91b9943"
                                      >
                                        <bdo data-type="conditional-block">
                                          <bdo data-type="body">
                                            <bdo
                                              className="block-container
                                                          if"
                                              data-type="if"
                                              id="73189d93-ed3a-d597-3efc-15956fa8e04e"
                                            >
                                              <bdo data-type="conditional-block">
                                                <bdo data-type="body">
                                                  <bdo
                                                    className="block-container
                                                                if"
                                                    data-type="if"
                                                    id="19e172cb-4ccf-1904-7c06-4251800ba748"
                                                  >
                                                    <bdo
                                                      className="statement-end-if-in-editor"
                                                      data-type="close"
                                                    />
                                                  </bdo>
                                                </bdo>
                                              </bdo>
                                            </bdo>
                                          </bdo>
                                        </bdo>
                                      </bdo>
                                      <bdo
                                        className="block-container
                                                    if"
                                        data-type="if"
                                        id="3c3071ce-c603-4812-b8ca-ac40b91b9943"
                                      >
                                        <bdo data-type="conditional-block">
                                          <bdo data-type="body">
                                            <bdo
                                              className="block-container
                                                          if"
                                              data-type="if"
                                              id="73189d93-ed3a-d597-3efc-15956fa8e04e"
                                            >
                                              <bdo data-type="conditional-block">
                                                <bdo
                                                  className="block-component"
                                                  data-record-question-key="limitations_liability_option"
                                                  data-type="statement"
                                                />
                                              </bdo>
                                            </bdo>
                                          </bdo>
                                        </bdo>
                                      </bdo>
                                    </span>
                                    .
                                    <span
                                      style={{
                                        fontSize: 15,
                                        lineHeight: "115%",
                                        fontFamily: "Arial",
                                        color: "rgb(89, 89,89)",
                                      }}
                                    >
                                      <bdo
                                        className="block-container
                                                    if"
                                        data-type="if"
                                        id="3c3071ce-c603-4812-b8ca-ac40b91b9943"
                                      >
                                        <bdo data-type="conditional-block">
                                          <bdo data-type="body">
                                            CERTAIN US STATE LAWS AND
                                            INTERNATIONAL LAWS DO NOT ALLOW
                                            LIMITATIONS ON IMPLIED WARRANTIES OR
                                            THE EXCLUSION OR LIMITATION OF
                                            CERTAIN DAMAGES. IF THESE LAWS APPLY
                                            TO YOU, SOME OR ALL OF THE ABOVE
                                            DISCLAIMERS OR LIMITATIONS MAY NOT
                                            APPLY TO YOU, AND YOU MAY HAVE
                                            ADDITIONAL RIGHTS.
                                          </bdo>
                                        </bdo>
                                      </bdo>
                                      <bdo
                                        className="block-container
                                                    if"
                                        data-type="if"
                                        id="3c3071ce-c603-4812-b8ca-ac40b91b9943"
                                      >
                                        <bdo
                                          className="statement-end-if-in-editor"
                                          data-type="close"
                                        />
                                      </bdo>
                                    </span>
                                  </bdo>
                                </bdo>
                              </bdo>
                            </bdo>
                          </bdo>
                        </bdo>
                      </bdo>
                    </bdo>
                  </bdo>
                </span>
              </span>
            </span>
          </div>
          <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="heading_1"
            id="indemnification"
            style={{ lineHeight: "1.5" }}
          >
            <strong>
              <span style={{ fontSize: 19 }}>24. INDEMNIFICATION</span>
            </strong>
          </div>
          <div className="MsoNormal" style={{ lineHeight: 1 }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="body_text"
            style={{ lineHeight: "1.5" }}
          >
            <span style={{ fontSize: 15 }}>
              You agree to defend, indemnify, and hold us harmless, including
              our subsidiaries, affiliates, and all of our respective officers,
              agents, partners, and employees, from and against any loss,
              damage, liability, claim, or demand, including reasonable
              attorneys’ fees and expenses, made by any third party due to or
              arising out of:{" "}
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "rgb(89, 89, 89)",
                }}
              >
                <bdo
                  className="block-container
                              if"
                  data-type="if"
                  id="475fffa5-05ca-def8-ac88-f426b238903c"
                >
                  <bdo data-type="conditional-block">
                    <bdo
                      className="block-component"
                      data-record-question-key="user_post_content_option"
                      data-type="statement"
                    />
                  </bdo>
                </bdo>
              </span>
              (1) use of the Site; (2) breach of these Terms of Use; (3) any
              breach of your representations and warranties set forth in these
              Terms of Use; (4) your violation of the rights of a third party,
              including but not limited to intellectual property rights; or (5)
              any overt harmful act toward any other user of the Site with whom
              you connected via the Site. Notwithstanding the foregoing, we
              reserve the right, at your expense, to assume the exclusive
              defense and control of any matter for which you are required to
              indemnify us, and you agree to cooperate, at your expense, with
              our defense of such claims. We will use reasonable efforts to
              notify you of any such claim, action, or proceeding which is
              subject to this indemnification upon becoming aware of it.
            </span>
          </div>
          <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="heading_1"
            id="userdata"
            style={{ lineHeight: "1.5" }}
          >
            <strong>
              <span style={{ fontSize: 19 }}>25. USER DATA</span>
            </strong>
          </div>
          <div className="MsoNormal" style={{ lineHeight: 1 }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="body_text"
            style={{ lineHeight: "1.5" }}
          >
            <span style={{ fontSize: 15 }}>
              We will maintain certain data that you transmit to the Site for
              the purpose of managing the performance of the Site, as well as
              data relating to your use of the Site. Although we perform regular
              routine backups of data, you are solely responsible for all data
              that you transmit or that relates to any activity you have
              undertaken using the Site. You agree that we shall have no
              liability to you for any loss or corruption of any such data, and
              you hereby waive any right of action against us arising from any
              such loss or corruption of such data.
            </span>
          </div>
          <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="heading_1"
            id="electronic"
            style={{ lineHeight: "1.5" }}
          >
            <span style={{ fontSize: 19 }}>
              <strong>
                26. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
              </strong>
            </span>
          </div>
          <div className="MsoNormal" style={{ lineHeight: 1 }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="body_text"
            style={{ lineHeight: "1.5" }}
          >
            <span style={{ fontSize: 15 }}>
              Visiting{" "}
              <span
                style={{
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "rgb(89, 89, 89)",
                }}
              >
                the Site, sending us emails, and completing online forms
                constitute electronic communications. You consent to receive
                electronic communications, and you agree that all agreements,
                notices, disclosures, and other communications we provide to you
                electronically, via email and on the Site, satisfy any legal
                requirement that such communication be in writing. YOU HEREBY
                AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS,
                AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES,
                POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY
                US OR VIA THE SITE. You hereby waive any rights or requirements
                under any statutes, regulations, rules, ordinances, or other
                laws in any jurisdiction which require an original signature or
                delivery or retention of non-electronic records, or to payments
                or the granting of credits by any means other than electronic
                means.
              </span>
            </span>
          </div>
          <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
            <bdo className="block-component" />
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="heading_1"
            id="california"
            style={{ lineHeight: "1.5" }}
          >
            <span style={{ fontSize: 19 }}>
              <strong>27. CALIFORNIA USERS AND RESIDENTS</strong>
            </span>
          </div>
          <div className="MsoNormal" style={{ lineHeight: 1 }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="body_text"
            style={{ lineHeight: "1.5" }}
          >
            <span style={{ fontSize: 15 }}>
              If any complaint with us is not satisfactorily resolved, you can
              contact the Complaint Assistance Unit of the Division of Consumer
              Services of the California Department of Consumer Affairs in
              writing at 1625 North Market Blvd., Suite N 112, Sacramento,
              California 95834 or by telephone at (800) 952-5210 or (916)
              445-1254.
            </span>
          </div>
          <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: 15 }}>
              <bdo className="statement-end-if-in-editor" />
            </span>
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="heading_1"
            id="misc"
            style={{ lineHeight: "1.5" }}
          >
            <strong>
              <span style={{ fontSize: 19 }}>28. MISCELLANEOUS</span>
            </strong>
          </div>
          <div className="MsoNormal" style={{ lineHeight: 1 }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="body_text"
            style={{ lineHeight: "1.5" }}
          >
            <span style={{ fontSize: 15 }}>
              These Terms of Use and any policies or operating rules posted by
              us on the Site or in respect to the Site constitute the entire
              agreement and understanding between you and us. Our failure to
              exercise or enforce any right or provision of these Terms of Use
              shall not operate as a waiver of such right or provision. These
              Terms of Use operate to the fullest extent permissible by law. We
              may assign any or all of our rights and obligations to others at
              any time. We shall not be responsible or liable for any loss,
              damage, delay, or failure to act caused by any cause beyond our
              reasonable control. If any provision or part of a provision of
              these Terms of Use is determined to be unlawful, void, or
              unenforceable, that provision or part of the provision is deemed
              severable from these Terms of Use and does not affect the validity
              and enforceability of any remaining provisions. There is no joint
              venture, partnership, employment or agency relationship created
              between you and us as a result of these Terms of Use or use of the
              Site. You agree that these Terms of Use will not be construed
              against us by virtue of having drafted them. You hereby waive any
              and all defenses you may have based on the electronic form of
              these Terms of Use and the lack of signing by the parties hereto
              to execute these Terms of Use.
              <bdo className="block-component" />
            </span>
          </div>
          <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="heading_1"
            id="contact"
            style={{ lineHeight: "1.5" }}
          >
            <span style={{ fontSize: 19 }}>
              <strong>29. CONTACT US</strong>
            </span>
          </div>
          <div className="MsoNormal" style={{ lineHeight: "1.1" }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="body_text"
            style={{ lineHeight: "1.5" }}
          >
            <span style={{ fontSize: 15 }}>
              In o
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "rgb(89, 89, 89)",
                }}
              >
                rder to resolve a complaint regarding the Site or to receive
                further information regarding use of the Site, please contact us
                at:
              </span>
            </span>
          </div>
          <div className="MsoNormal" style={{ lineHeight: 1 }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="body_text"
            style={{ lineHeight: "1.5" }}
          >
            <span style={{ fontSize: 15 }}>
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "rgb(89, 89, 89)",
                }}
              >
                <bdo className="question">
                  <strong>Attribe, Inc.</strong>
                </bdo>
              </span>
            </span>
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="body_text"
            style={{ lineHeight: "1.5" }}
          >
            <span style={{ fontSize: 15 }}>
              <span
                style={{
                  fontSize: 15,
                  lineHeight: "115%",
                  fontFamily: "Arial",
                  color: "rgb(89, 89, 89)",
                }}
              >
                <strong>
                  <span style={{ color: "rgb(89, 89, 89)" }}>
                    <bdo className="question">3802 The Strand</bdo>
                    <strong>
                      <span style={{ color: "rgb(89, 89, 89)" }}>
                        <span style={{ fontSize: 15 }}>
                          <bdo className="block-component" />
                        </span>
                      </span>
                    </strong>
                  </span>
                </strong>
              </span>
            </span>
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="body_text"
            style={{ lineHeight: "1.5" }}
          >
            <strong>
              <span style={{ color: "rgb(89, 89, 89)" }}>
                <span style={{ fontSize: 15 }}>
                  <bdo className="question">Manhattan Beach</bdo>
                  <strong>
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      <span style={{ fontSize: 15 }}>
                        <bdo className="block-component" />
                        <bdo className="block-component" />,
                        <bdo className="question">CA</bdo>
                        <bdo className="statement-end-if-in-editor" />
                        <bdo className="block-component" />
                      </span>
                    </span>
                  </strong>
                  <span style={{ fontSize: 15 }}>
                    <strong>
                      <span style={{ color: "rgb(89, 89, 89)" }}>
                        <bdo className="block-component" />
                        <bdo className="question">90266</bdo>
                        <bdo className="statement-end-if-in-editor" />
                      </span>
                    </strong>
                    <strong>
                      <span style={{ color: "rgb(89, 89, 89)" }}>
                        <bdo className="block-component" />
                        <bdo className="block-component" />
                        <bdo className="block-component" />
                      </span>
                    </strong>
                  </span>
                </span>
              </span>
            </strong>
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="body_text"
            style={{ lineHeight: "1.5" }}
          >
            <bdo className="question">
              <strong>
                <span style={{ fontSize: 15 }}>United States</span>
              </strong>
            </bdo>
            <span style={{ fontSize: 15 }}>
              <span style={{ fontSize: 15 }}>
                <strong>
                  <span style={{ color: "rgb(89, 89,89)" }}>
                    <bdo className="statement-end-if-in-editor">
                      <span style={{ color: "rgb(89, 89, 89)" }}>
                        <strong>
                          <span style={{ fontSize: 15 }}>
                            <bdo className="statement-end-if-in-editor">
                              <span style={{ color: "rgb(89, 89,89)" }}>
                                <strong>
                                  <span style={{ fontSize: 15 }}>
                                    <bdo className="statement-end-if-in-editor">
                                      <bdo className="block-component" />
                                    </bdo>
                                  </span>
                                </strong>
                              </span>
                            </bdo>
                            <bdo className="statement-end-if-in-editor">
                              <strong />
                            </bdo>
                          </span>
                        </strong>
                      </span>
                    </bdo>
                  </span>
                </strong>
              </span>
            </span>
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="body_text"
            style={{ lineHeight: "1.5" }}
          >
            <strong>
              <span style={{ fontSize: 15 }}>
                Phone: <bdo className="question">6508234349</bdo>
              </span>
            </strong>
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="body_text"
            style={{ lineHeight: "1.5" }}
          >
            <strong>
              <span style={{ fontSize: 15 }}>
                <bdo className="block-component" />
              </span>
            </strong>
          </div>
          <div
            className="MsoNormal"
            data-custom-classname="body_text"
            style={{ lineHeight: "1.5" }}
          >
            <bdo className="question">
              <strong>
                <span style={{ fontSize: 15 }}>
                  ryan@wellspringattribution.com
                </span>
              </strong>
            </bdo>
          </div>
        </>
      </div>
    </div>
  );
}
