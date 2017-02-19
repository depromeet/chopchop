//
//  ReviewCell.swift
//  Chopchop
//
//  Created by Goodnews on 2017. 2. 16..
//  Copyright © 2017년 goodnews. All rights reserved.
//

import UIKit

class ReviewCell: UICollectionViewCell {
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupView()
    }
    
    let profileImgView: UIImageView = {
        let iv = UIImageView()
        iv.layer.cornerRadius = 18
        iv.layer.masksToBounds = true
        iv.backgroundColor = .lightGray
        return iv
    }()
    
    
    // 바닥의 버튼들
    static func bottomButton(title: String, imageName: UIImage?) -> UIButton {
        let button = UIButton()
        button.setTitle(title, for: .normal)
        button.layer.borderColor = UIColor.lightGray.cgColor
        button.layer.borderWidth = 1
        button.backgroundColor = UIColor.black.withAlphaComponent(0.1)
        return button
    }
    let likeButton = ReviewCell.bottomButton(title: "좋아요", imageName: nil)
    let pinButton = ReviewCell.bottomButton(title: "핀", imageName: nil)
    let commentButton = ReviewCell.bottomButton(title: "댓글", imageName: nil)
    let shareButton = ReviewCell.bottomButton(title: "공유", imageName: nil)
    
    
    let idLabel: UILabel = {
        let label = UILabel()
        label.text = "아웃사이더"
        
        return label
    }()
    let dateLabel: UILabel = {
        let label = UILabel()
        label.text = "2000.00.00"
        
        label.textColor = .lightGray
        
        label.font = UIFont.systemFont(ofSize: 12)
        return label
    }()
    let bodyTextView: UITextView = {
        let tv = UITextView()
        tv.isScrollEnabled = false
        tv.isEditable = false
        tv.isSelectable = false
        tv.backgroundColor = .clear
        tv.isUserInteractionEnabled = false
        tv.text = "누구보다 빠르게 난 남들과는 다르게 색다르게 리듬을 타는 비트 위의 나그네 더 빠르게 빨려들어가 빠져버리는 네 박자 리듬 위에 나는 매일 비트를 쪼개. 이리 듣고 저리 봐도 CD Video 이 비트 위의 내 가사는 필이 베리 굿 그 누구보다 빠르게 난 남들과는 다르게 색다르게 리듬을 타는 비트위의 나그네 예얍 누구보다 빠르게 난 남들과는 다르게 색다르게 리듬을 타는 비트 위의 나그네 더 빠르게 빨려들어가 빠져버리는 네 박자 리듬 위에 나는 매일 비트를 쪼개. 이리 듣고 저리 봐도 CD Video 이 비트 위의 내 가사는 필이 베리 굿 그 누구보다 빠르게 난 남들과는 다르게 색다르게 리듬을 타는 비트위의 나그네 예얍 누구보다 빠르게 난 남들과는 다르게 색다르게 리듬을 타는 비트 위의 나그네 더 빠르게 빨려들어가 빠져버리는 네 박자 리듬 위에 나는 매일 비트를 쪼개. 이리 듣고 저리 봐도 CD Video 이 비트 위의 내 가사는 필이 베리 굿 그 누구보다 빠르게 난 남들과는 다르게 색다르게 리듬을 타는 비트위의 나그네 예얍"
        return tv
    }()
    
    let verticalStickView: UIView = {
        let view = UIView()
        
        view.backgroundColor = .darkGray
        return view
    }() // 프로필 밑에 세로로 주욱 갈라지는 뷰
    
    func setupView() {
        addSubview(profileImgView)
        addSubview(idLabel)
        addSubview(dateLabel)
        addSubview(bodyTextView)
        addSubview(verticalStickView)
        
        addSubview(likeButton)
        addSubview(pinButton)
        addSubview(commentButton)
        addSubview(shareButton)
        
        
        addConstraints(with: "H:|-8-[v0(36)]-8-[v1]-8-[v2]", views: profileImgView, idLabel, dateLabel)
        addConstraints(with: "H:|-25-[v0(2)]-25-[v1]-8-|", views: verticalStickView, bodyTextView)
        addConstraints(with: "V:|-8-[v0(36)]-8-[v1]-8-[v2(34)]|", views: profileImgView, verticalStickView, likeButton)
        
        // buttons Constraint
        addConstraints(with: "H:|[v0(v3)][v1(v3)][v2(v3)][v3]|", views: likeButton, pinButton, commentButton, shareButton)
        addConstraints(with: "V:[v0(34)]|", views: pinButton)
        addConstraints(with: "V:[v0(34)]|", views: commentButton)
        addConstraints(with: "V:[v0(34)]|", views: shareButton)
        
        
        idLabel.bottomAnchor.constraint(equalTo: profileImgView.bottomAnchor).isActive = true
        dateLabel.bottomAnchor.constraint(equalTo: idLabel.bottomAnchor).isActive = true
        bodyTextView.topAnchor.constraint(equalTo: idLabel.bottomAnchor).isActive = true
        bodyTextView.bottomAnchor.constraint(equalTo: likeButton.topAnchor, constant: 0).isActive = true
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
