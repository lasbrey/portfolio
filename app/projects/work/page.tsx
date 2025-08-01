"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Worktitle } from "@/components/sections/worktitle";
import { Workbody } from "@/components/sections/workbody";
import { OtherProjectsSection } from "@/components/sections/otherprojectssection";
import projectsData from '@/data/projects.json';

const WorkContent = () => {
    const searchParams = useSearchParams();
    const projectId = searchParams.get('id');
    const [project, setProject] = useState<any>(null);

    useEffect(() => {
        if (projectId) {
            const foundProject = projectsData.projects.find(p => p.id === projectId);
            setProject(foundProject || projectsData.projects[0]); // Fallback to first project
        } else {
            setProject(projectsData.projects[0]); // Default to first project
        }
    }, [projectId]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Worktitle project={project} />
            <Workbody project={project} />
            <OtherProjectsSection currentProjectId={project.id} />
        </>
    );
};

const Work = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <WorkContent />
        </Suspense>
    );
};

export default Work;