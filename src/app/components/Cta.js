"use client";

// next image
import Image from "next/image";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "/variants";

export default function Cta() {
  return (
    <section
      className="pt-24 xl:pt-28 flex items-end pb-0 bg-[#b2b7c2]/10 overflow-hidden"
      id="contact"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 text-center py-4"
        >
          Our Talented Team.
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="mb-[42px] max-w-md mx-auto"
        >
          Meet the incredible team behind our success! Driven by passion, each
          member brings unique skills that keep us moving forward together.
        </motion.p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            style={{ opacity: 1, transform: "none" }}
            bis_skin_checked="1"
          >
            <img src="/images/testimonial/rohan.webp" alt="Team One" />
            <div class="" bis_skin_checked="1">
              <h3 class="text-secondColor font-bold py-3 text-2xl">Rohan</h3>
              <h6 class="pb-5">Employee</h6>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            style={{ opacity: 1, transform: "none" }}
            bis_skin_checked="1"
          >
            <img src="/images/testimonial/maheen.webp" alt="Team One" />
            <div class="" bis_skin_checked="1">
              <h3 class="text-secondColor font-bold py-3 text-2xl">Maheen</h3>
              <h6 class="pb-5">Owner</h6>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            style={{ opacity: 1, transform: "none" }}
            bis_skin_checked="1"
          >
            <img src="/images/testimonial/junaid.webp" alt="Team One" />
            <div class="" bis_skin_checked="1">
              <h3 class="text-secondColor font-bold py-3 text-2xl">Junaid</h3>
              <h6 class="pb-5">Owner</h6>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.9)}
            initial="hidden"
            whileInView={"show"}
            style={{ opacity: 1, transform: "none" }}
            bis_skin_checked="1"
          >
            <img src="/images/testimonial/mobeen.webp" alt="Team One" />
            <div class="" bis_skin_checked="1">
              <h3 class="text-secondColor font-bold py-3 text-2xl">Mobeen</h3>
              <h6 class="pb-5">Employee</h6>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
