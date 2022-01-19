<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StaticPagesController extends AbstractController
{
    #[Route('/', name: 'landing_page')]
    public function landing_page(): Response
    {
        return $this->render('static_pages/landing_page.html.twig', [
            'controller_name' => 'StaticPagesController',
        ]);
    }
}
