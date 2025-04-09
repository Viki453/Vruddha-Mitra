import { Link, Navigate, NavLink, useNavigate } from "react-router";
import styles from "./Landing.module.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.Main}>
        <div className={styles.info}>
          <h1>Hi! We’re VruddhaMitra.</h1>
          <p>
            We all need a pal sometimes. That’s why VruddhaMitra’s here.
            VruddhaMitra helps health plans and employers connect members and
            their families to real people for help with companion care, everyday
            tasks, transportation, and more. It’s vital human connection, right
            to the front door.
          </p>
          <select className={styles.service} name="service">
            <option disabled selected value="">
              I&apos;d like to learn...
            </option>
            <option value="Health Plan">
              How Vruddha works with health plans
            </option>
            <option value="Why us">Why employers choose VrudhaMitra</option>
            <option value="Signup">
              Where can I sign up to be Vruddha Mitra
            </option>
            <option value="Start">How to get started as a Vruddha Mitra</option>
            <option value="care">Career options at VruddhaMitra</option>
          </select>
        </div>
        <div>
          <div className={styles.imge}>
            <img src="src\assets\How-Do-You-Help-Old-People_ (1).webp" />
          </div>
        </div>
      </div>
      <div className={styles.secSeg}>
        <div className={styles.mncare}>
          <h1>Mitra Care</h1>
          <p>
            Vruddha Mitra provide vital social support and companion care to
            strengthen families, help older adults remain connected, and support
            diverse communities—providing win-win benefits for all.
          </p>
        </div>
        <div className={styles.care}>
          <div className={styles.feature}>
            <h3>Promote independence</h3>
            <p>
              Vruddha Mitra gives older adults and the elderly companion care
              and support to age in place.
            </p>
          </div>
          <div className={styles.feature}>
            <h3>Reduce inequities</h3>
            <p>
              VruddhaMitra advances equity for populations that have been
              historically marginalized.
            </p>
          </div>
          <div className={styles.feature}>
            <h3>Cure loneliness</h3>
            <p>
              No one’s meant to go it alone. With VruddhaMitra, “together” is
              just a call or click away.
            </p>
          </div>
          <div className={styles.feature}>
            <h3>Improve outcomes</h3>
            <p>
              Research shows that members feel physically and mentally healthier
              with Papa.
            </p>
          </div>
          <div className={styles.feature}>
            <h3>Control costs</h3>
            <p>
              Papa members have fewer visits to the hospital and are more likely
              to receive preventive care—the results add up.
            </p>
          </div>
          <div className={styles.feature}>
            <h3>Increase satisfaction</h3>
            <p>
              Our one-of-a-kind benefit helps health plans retain members and
              employers attract—and keep!—talent.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.thirdSeg}>
        <div className={styles.working}>
          <h1>How it works</h1>
          <p>
            Available nationwide, in-person or by phone, Papa Pals offer a hand
            to help, a shoulder to lean on, and an ear to listen.
          </p>
          <ol>
            <li>
              <h3>Sign up through your participating plan.</h3>
              <p>
                Flexible enrollment processes help members take advantage of
                their Medicare Advantage, Medicaid, or employer-provided
                benefit.
              </p>
            </li>
            <li>
              <h3>Schedule a visit with a Mitra.</h3>
              <p>
                Health plan members can schedule appointments by phone.
                Employees have the flexibility of using our mobile app for
                iPhone and Android.
              </p>
            </li>
            <li>
              <h3>Enjoy your time and tell us how we did.</h3>
              <p>
                Members and loved ones receive support from Mitras for companion
                care, help with children and pets, transportation, errands, and
                more. Post-visit surveys help us make sure it’s the perfect
                Mitra every time!
              </p>
            </li>
          </ol>
        </div>
        <div className={styles.imge}>
          <img src="src\assets\istockphoto-1395406581-612x612.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
