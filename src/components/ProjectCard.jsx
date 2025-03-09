import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div
      className={
        "relative p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
        (classes || "")
      }
    >
      <figure className="img-box aspect-square rounded-md mb-3">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>

      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-medium mb-2">{title}</h3>

          <div className="flex flex-wrap items-center gap-1">
            {tags.map((label, index) => (
              <span
                key={index}
                className="h-6 text-xs text-zinc-400 bg-zinc-50/5 grid items-center px-2 rounded-md"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="w-8 h-8 rounded-md grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
          <span className="material-symbols-rounded text-sm" aria-hidden="true">
            arrow_outward
          </span>
        </div>
      </div>

      <a href={projectLink} target="_blank" rel="noopener noreferrer" className="absolute inset-0"></a>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
