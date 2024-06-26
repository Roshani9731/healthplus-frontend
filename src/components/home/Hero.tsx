"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Title, Text, Anchor } from "@/components/mantine.helper";

import HeroCover from "@/assets/home/hero_cover.svg";
import FeaturePersonalLevelMedicalRecords from "@/assets/home/features/personal_level_medical_records.svg";
import FeaturePrescriptionMails from "@/assets/home/features/prescription_mails.svg";
import FeatureCompleteUsageStats from "@/assets/home/features/complete_usage_stats.svg";

import styles from "./Hero.module.css";
import { Modal } from "@mantine/core";
import AuthModal from "./AuthModal";
import { useRouter, useSearchParams } from "next/navigation";

const features = [
  {
    title: ["Personal Level", "Medical Records"],
    icon: FeaturePersonalLevelMedicalRecords,
    color: "#FBD300",
    background: "#FFFCEA",
  },
  {
    title: ["Prescription", "Mails"],
    icon: FeaturePrescriptionMails,
    color: "#11D100",
    background: "#DBFFD8",
  },
  {
    title: ["Complete", "Usage Stats"],
    icon: FeatureCompleteUsageStats,
    color: "#2087FF",
    background: "#E5F1FF",
  },
];

function Hero() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCloseModal = () => {
    router.push("/");
  };

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>Health Plus</h2>
          <div className={styles.headerRight}>
            <Button
              component={"a"}
              href={"https://github.com/roshani9731"}
              target={"_blank"}
              size="md"
              variant="subtle"
              color="secondary"
            >
              GitHub
            </Button>
            <Button
              component={Link}
              href={{
                href: "/",
                query: {
                  modal: "auth",
                },
              }}
              size="md"
            >
              Login
            </Button>
          </div>
        </header>
        <main className={styles.main}>
          <div className={styles.mainLeft}>
            <div className={styles.mainLeftText}>
              <Title order={1}>
                Step Towards Accessibility and Transparency in Healthcare
              </Title>
              <Text
                size={"md"}
                color="black.7"
                className={styles.mainLeftTextDesc}
              >
                Aimed at enhancing your healthcare experience and providing
                access and manage all your medical information at Health Center
                in one place
              </Text>
            </div>
            <div className={styles.features}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={styles.feature}
                  style={{ background: feature.background }}
                >
                  <div className={styles.featureIcon}>
                    <Image src={feature.icon} alt={feature.title.join(" ")} />
                  </div>
                  <div className={styles.featureText}>
                    <Title order={5} style={{ color: feature.color }}>
                      {feature.title.map((title, index) => (
                        <Text inherit key={index}>
                          {title}
                        </Text>
                      ))}
                    </Title>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.mainRight}>
            <Image src={HeroCover} alt="Healthcare" fill priority />
          </div>
        </main>
        <footer className={styles.footer}>
          <Text color="black.5" align="center" size="md">
            Deveoped with ♥️ by <Anchor href="/">Roshani Navdiya</Anchor>
          </Text>
        </footer>
      </div>
      <Modal
        opened={searchParams.get("modal") == "auth"}
        onClose={handleCloseModal}
        withCloseButton={false}
        centered
        size={450}
      >
        <AuthModal closeModal={handleCloseModal} />
      </Modal>
    </>
  );
}

export default Hero;
