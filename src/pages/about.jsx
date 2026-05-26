import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions
} from "react-native";

const { width } = Dimensions.get("window");
const isDesktop = width > 768;

export default function About() {
  const skills = [
    { name: "Node.js", level: "90%" },
    { name: "Python", level: "80%" },
    { name: "Tailwind CSS", level: "90%" },
    { name: "React.js", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "Laravel", level: "80%" },
  ];

  const stats = [
    { number: "10+", label: "Technologies" },
    { number: "5+", label: "Projects" },
    { number: "Full Stack", label: "Specialization" },
    { number: "AI + Mobile", label: "Focus" },
  ];

  return (
    <ScrollView
      id="about"
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* --- HEADER SECTION --- */}
      <View style={styles.headerWrapper}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <View style={styles.titleDivider} />
        <Text style={styles.sectionSubtitle}>
          Passionate Full-Stack Developer focused on building modern, scalable,
          AI-powered web and mobile applications that solve real-world problems and
          deliver impactful digital experiences.
        </Text>
      </View>

      {/* --- PROFILE CONTENT SECTION --- */}
      <View style={[styles.profileLayout, isDesktop ? styles.rowDirection : styles.columnDirection]}>
        {/* Profile Image Frame with Subtle Glass Overlay effect */}
        <View style={[styles.imageContainer, isDesktop ? styles.halfWidth : styles.fullWidth]}>
          <Image
            source={{ uri: "/me.png" }}
            style={styles.profileImage}
            resizeMode="cover"
          />
        </View>

        {/* Bio Details */}
        <View style={[styles.contentContainer, isDesktop ? styles.halfWidth : styles.fullWidth]}>
          <Text style={styles.roleTagline}>
            Full-Stack Developer | AI Engineer | Mobile App Developer
          </Text>

          <Text style={styles.bodyText}>
            I am a passionate Full-Stack Developer with experience in designing and
            developing modern, responsive, and scalable web and mobile applications.
            I specialize in building intelligent systems integrated with Artificial
            Intelligence to create smart, efficient, and user-focused digital solutions.
          </Text>

          <Text style={styles.bodyText}>
            My expertise includes frontend and backend development using React.js,
            Node.js, Express.js, Laravel, JavaScript, Python, Tailwind CSS, and modern
            database technologies. I enjoy transforming complex ideas into clean,
            functional, and high-performance applications.
          </Text>

          <Text style={styles.bodyText}>
            I continuously improve my technical skills and stay updated with emerging
            technologies to build secure, scalable, and innovative software solutions
            that create meaningful impact.
          </Text>

          {/* Info Metadata Columns */}
          <View style={[styles.metaGrid, isDesktop ? styles.rowDirection : styles.columnDirection]}>
            <View style={styles.metaColumn}>
              <Text style={styles.metaItem}><Text style={styles.boldText}>Age:</Text> 23</Text>
              <Text style={styles.metaItem}><Text style={styles.boldText}>Role:</Text> Full-Stack Developer</Text>
              <Text style={styles.metaItem}><Text style={styles.boldText}>Specialization:</Text> AI Integrated Systems</Text>
              <Text style={styles.metaItem}><Text style={styles.boldText}>Location:</Text> Ethiopia</Text>
            </View>

            <View style={styles.metaColumn}>
              <Text style={styles.metaItem}><Text style={styles.boldText}>Experience:</Text> Web & Mobile Dev</Text>
              <Text style={styles.metaItem}><Text style={styles.boldText}>Tech Stack:</Text> React, Node, Python, Laravel</Text>
              <Text style={styles.metaItem}><Text style={styles.boldText}>Status:</Text> Open to Opportunities</Text>
              <Text style={styles.metaItem}><Text style={styles.boldText}>Focus:</Text> Full Stack & AI Solutions</Text>
            </View>
          </View>
        </View>
      </View>

      {/* --- TECHNICAL SKILLS SECTION --- */}
      <View style={styles.skillsWrapper}>
        <Text style={styles.subSectionTitle}>Technical Skills</Text>
        <Text style={styles.skillsDescription}>
          Experienced in building scalable, responsive, and high-performance applications using modern development technologies.
        </Text>

        <View style={[styles.skillsGrid, isDesktop ? styles.rowDirection : styles.columnDirection]}>
          {skills.map((skill) => (
            <View key={skill.name} style={[styles.skillCard, isDesktop ? styles.halfWidthCard : styles.fullWidth]}>
              <div style={styles.skillHeaderWeb}>
                <Text style={styles.skillName}>{skill.name}</Text>
                <Text style={styles.skillLevel}>{skill.level}</Text>
              </div>

              {/* Progress Bar Track */}
              <View style={styles.progressBarTrack}>
                <View style={[styles.progressBarFill, { width: skill.level }]} />
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* --- STATS SECTION --- */}
      <View style={styles.statsWrapper}>
        <Text style={styles.subSectionTitle}>Professional Overview</Text>
        <Text style={styles.statsDescription}>
          Dedicated to continuous learning, innovation, and delivering impactful technology solutions.
        </Text>

        <View style={styles.statsFlexLayout}>
          {stats.map((s) => (
            <View key={s.label} style={styles.statBox}>
              <Text style={styles.statNumber}>{s.number}</Text>
              <View style={styles.statDivider} />
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0a0a0a", // Immersive deep premium dark theme
    paddingVertical: 64,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  headerWrapper: {
    alignItems: "center",
    marginBottom: 48,
    maxWidth: 768,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#ffffff",
    letterSpacing: 1,
  },
  titleDivider: {
    width: 60,
    height: 4,
    backgroundColor: "#1abc9c",
    borderRadius: 2,
    marginVertical: 16,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: "#a3a3a3",
    textAlign: "center",
    lineHeight: 26,
  },
  profileLayout: {
    maxWidth: 1152,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 32,
    marginBottom: 64,
  },
  rowDirection: {
    flexDirection: "row",
  },
  columnDirection: {
    flexDirection: "column",
  },
  halfWidth: {
    flex: 1,
    width: "100%",
  },
  fullWidth: {
    width: "100%",
  },
  imageContainer: {
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    aspectRatio: 1.1,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    minHeight: 350,
  },
  contentContainer: {
    justifyContent: "center",
  },
  roleTagline: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1abc9c",
    marginBottom: 16,
    fontStyle: "italic",
  },
  bodyText: {
    fontSize: 15,
    color: "#d4d4d4",
    lineHeight: 26,
    marginBottom: 16,
  },
  metaGrid: {
    gap: 24,
    marginTop: 16,
    borderTopWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.05)",
    paddingTop: 24,
  },
  metaColumn: {
    flex: 1,
    gap: 12,
  },
  metaItem: {
    fontSize: 14,
    color: "#a3a3a3",
  },
  boldText: {
    fontWeight: "700",
    color: "#ffffff",
  },
  skillsWrapper: {
    width: "100%",
    maxWidth: 1024,
    paddingVertical: 48,
    alignItems: "center",
  },
  subSectionTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: 12,
  },
  skillsDescription: {
    fontSize: 15,
    color: "#a3a3a3",
    marginBottom: 40,
    textAlign: "center",
  },
  skillsGrid: {
    width: "100%",
    flexWrap: "wrap",
    gap: 24,
  },
  halfWidthCard: {
    width: "48%",
  },
  skillCard: {
    marginBottom: 8,
  },
  skillHeaderWeb: {
    display: "flex",
    justifyContent: "between",
    alignItems: "center",
    width: "100%",
    marginBottom: 8,
  },
  skillName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#ffffff",
  },
  skillLevel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1abc9c",
  },
  progressBarTrack: {
    width: "100%",
    height: 8,
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#1abc9c",
    borderRadius: 4,
  },
  statsWrapper: {
    width: "100%",
    maxWidth: 896,
    paddingVertical: 48,
    alignItems: "center",
  },
  statsDescription: {
    fontSize: 15,
    color: "#a3a3a3",
    marginBottom: 48,
    textAlign: "center",
  },
  statsFlexLayout: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 40,
    width: "100%",
  },
  statBox: {
    alignItems: "center",
    minWidth: 160,
    padding: 16,
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.04)",
    borderRadius: 16,
  },
  statNumber: {
    fontSize: 40,
    fontWeight: "800",
    color: "#ffffff",
  },
  statDivider: {
    width: 24,
    height: 3,
    backgroundColor: "#1abc9c",
    marginVertical: 12,
    borderRadius: 1.5,
  },
  statLabel: {
    fontSize: 14,
    color: "#a3a3a3",
    textTransform: "capitalize",
    fontWeight: "500",
  },
});