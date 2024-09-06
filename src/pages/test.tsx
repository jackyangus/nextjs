import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import styles from './MeetingUI.module.scss';
import Image from 'next/image';
import Logo from '../image/globe.svg';

const MeetingUI = () => {
  const { t } = useTranslation();
  // const [activeTab, setActiveTab] = useState('gallery');
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);

  // const participants = [
  //   { name: 'Roy Green', initials: 'RG', role: '(Host, Me)' },
  //   { name: 'Tracy Brooks', initials: 'TB', role: '(Co-host)' },
  //   { name: 'Linda Lucas', initials: 'LL', role: '(Co-host)' },
  //   { name: 'User Name', initials: 'UN' },
  //   { name: 'User Name', initials: 'BW' },
  // ];

  const footerControls = [
    { name: 'Security', icon: '🛡️' },
    { name: 'Screen Share', icon: '📺' },
    { name: 'Polls', icon: '📊' },
    { name: 'Participants', icon: '👥', badge: 2 },
    { name: 'Chat', icon: '💬', badge: 2 },
    { name: 'More', icon: '••• ' },
  ];

  return (
    <div className={styles.root}>
      {/* Header and Main content remain the same */}
      
      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.controls}>
          <button
            className={classNames(
              styles.controlBtn,
              { [styles.controlBtnActive]: isMuted }
            )}
            onClick={() => setIsMuted(!isMuted)}
            aria-label={t(isMuted ? 'unmute' : 'mute')}
          >
            <span aria-hidden="true">{isMuted ? '🔇' : '🎤'}</span>
          </button>
          <button
            className={classNames(
              styles.controlBtn,
              { [styles.controlBtnActive]: !isVideoOn }
            )}
            onClick={() => setIsVideoOn(!isVideoOn)}
            aria-label={t(isVideoOn ? 'stopVideo' : 'startVideo')}
          >
            <span aria-hidden="true">{isVideoOn ? '📹' : '🚫'}</span>
          </button>
        </div>
        <div className={styles.footerControls}>
        <Logo width={50} height={50} />
        <Image
                className={styles.logo}
                src="https://nextjs.org/icons/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
          {footerControls.map((control) => (
            <button
              key={control.name}
              className={styles.footerControl}
              aria-label={t(control.name.toLowerCase())}
            >
              <span className={styles.icon} aria-hidden="true">{control.icon}</span>
              <span className={styles.label}>{t(control.name.toLowerCase())}</span>
              {control.badge && (
                <span className={styles.badge} aria-label={t('notifications', { count: control.badge })}>
                  {control.badge}
                </span>
              )}
            </button>
          ))}
        </div>
        <button className={styles.endBtn} aria-label={t('endMeeting')}>
          {t('end')}
        </button>
      </footer>
    </div>
  );
};

export default MeetingUI;