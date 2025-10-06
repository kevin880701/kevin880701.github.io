import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faExternalLinkAlt, faCalendarAlt, faCode, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import INFO from "../data/user";
import PROJECTS from "../data/projects";
import SEO from "../data/seo";

import "./styles/projectDetail.css";

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // 根據 slug 找到對應的專案
    const project = PROJECTS.find((proj) => proj.slug === id);

    if (!project) {
        return <div>專案不存在</div>;
    }

    const currentSEO = SEO.find((item) => item.page === "projects");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`${project.title} | ${INFO.main.title}`}</title>
                <meta name="description" content={project.description} />
                <meta name="keywords" content={currentSEO?.keywords?.join(", ") || ""} />
            </Helmet>

            <div className="page-content">
                <NavBar active="projects" />
                <div className="content-wrapper">

                    <div className="project-detail-container">
                        <div className="project-detail-back">
                            <button
                                className="project-detail-back-button"
                                onClick={() => navigate("/projects")}
                            >
                                <FontAwesomeIcon icon={faArrowLeft} />
                                <span>回到專案列表</span>
                            </button>
                        </div>

                        <div className="project-detail-header">
                            <div className="project-detail-logo-large">
                                <img src={project.logo} alt={project.title} />
                            </div>
                            <div className="project-detail-title-section">
                                <h1 className="project-detail-title">{project.title}</h1>
                                <p className="project-detail-description">{project.description}</p>
                            </div>
                        </div>

                        {/* 專案說明區塊 */}
                        <div className="project-detail-content">
                            <div className="project-detail-section">
                                <h2 className="project-detail-section-title">
                                    <FontAwesomeIcon icon={faInfoCircle} className="section-icon" />
                                    專案說明
                                </h2>
                                <div className="project-detail-description-content">
                                    {project.descriptions?.map((paragraph, index) => (
                                        <p key={index} className="description-paragraph">{paragraph}</p>
                                    )) || <p>專案說明準備中...</p>}
                                </div>
                            </div>

                            <div className="project-detail-section">
                                <h2 className="project-detail-section-title">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="section-icon" />
                                    專案展示
                                </h2>
                                <div className="project-detail-media">
                                    <div className="media-container">
                                        {/* 影片區塊 */}
                                        {project.media?.videos?.length > 0 && (
                                            <div className="media-section">
                                                <h3 className="media-section-title">影片展示</h3>
                                                <div className="videos-grid">
                                                    {project.media.videos.map((video, index) => {
                                                        // 支援舊格式(字串)和新格式(物件)
                                                        const videoSrc = typeof video === 'string' ? video : video.src;
                                                        const videoCaption = typeof video === 'object' ? video.caption : null;

                                                        return (
                                                            <div key={index} className="video-item">
                                                                <div className="video-wrapper">
                                                                    <video
                                                                        controls
                                                                        className="project-video"
                                                                        poster={`/images/${project.title.split(' ')[0]}-poster.jpg`}
                                                                    >
                                                                        <source src={videoSrc} type="video/mp4" />
                                                                        您的瀏覽器不支持 video 標籤。
                                                                    </video>
                                                                    {videoCaption && (
                                                                        <div className="media-caption">
                                                                            {videoCaption}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}

                                        {/* 圖片區塊 */}
                                        {project.media?.images?.length > 0 && (
                                            <div className="media-section">
                                                <h3 className="media-section-title">圖片展示</h3>
                                                <div className="images-grid">
                                                    {project.media.images.map((image, index) => {
                                                        // 支援舊格式(字串)和新格式(物件)
                                                        const imageSrc = typeof image === 'string' ? image : image.src;
                                                        const imageCaption = typeof image === 'object' ? image.caption : null;
                                                        const altText = imageCaption || `${project.title} 截圖 ${index + 1}`;

                                                        return (
                                                            <div key={index} className="image-item">
                                                                <div className="image-wrapper">
                                                                    <img
                                                                        src={imageSrc}
                                                                        alt={altText}
                                                                        className="project-image"
                                                                        onError={(e) => {
                                                                            e.target.style.display = 'none';
                                                                        }}
                                                                        onClick={() => openImageModal(imageSrc, altText)}
                                                                    />
                                                                    {imageCaption && (
                                                                        <div className="media-caption">
                                                                            {imageCaption}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}

                                        {(!project.media?.images?.length && !project.media?.videos?.length) && (
                                            <div className="no-media">
                                                <p>媒體內容準備中...</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="project-detail-section">
                                <h2 className="project-detail-section-title">
                                    <FontAwesomeIcon icon={faCode} className="section-icon" />
                                    技術特色
                                </h2>
                                <div className="project-detail-features">
                                    {project.features?.map((feature, index) => (
                                        <div key={index} className="feature-item">
                                            <span className="feature-bullet">•</span>
                                            <span>{feature}</span>
                                        </div>
                                    )) || []}
                                </div>
                            </div>

                            <div className="project-detail-section">
                                <h2 className="project-detail-section-title">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="section-icon" />
                                    專案成果
                                </h2>
                                <div className="project-detail-achievements">
                                    {project.achievements?.map((achievement, index) => (
                                        <div key={index} className="achievement-item">
                                            <span className="achievement-bullet">✓</span>
                                            <span>{achievement}</span>
                                        </div>
                                    )) || []}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

// 圖片點擊放大功能
const openImageModal = (src, alt) => {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="image-modal-content">
            <span class="image-modal-close">&times;</span>
            <img src="${src}" alt="${alt}" class="image-modal-img">
            <div class="image-modal-caption">${alt}</div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // 關閉模態框
    const closeModal = () => {
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto';
    };

    modal.querySelector('.image-modal-close').onclick = closeModal;
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };

    // ESC 鍵關閉
    const handleKeyPress = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleKeyPress);
        }
    };
    document.addEventListener('keydown', handleKeyPress);
};

export default ProjectDetail;